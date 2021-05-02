const imgB64 = require('./img/dLines.json');
let dLines;

let discordReady = false;

const dateid = require('./date_toID.js');

const canvasApp = require('canvas');
const canvas = canvasApp.createCanvas(1150, 450);
const context = canvas.getContext('2d');

const pastebin = require('pastebin-js');
const Pastebin = new pastebin({
    api_dev_key: process.env.PASTEBIN_DEV_KEY,
    api_user_name: process.env.PASTEBIN_USERNAME,
    api_user_password: process.env.PASTEBIN_PASSWORD
});

let provIDs = {
    sumbar: 2,
}

const province = require('./provinces/provinces.js');
let provinceData = [
    province.aceh,
    province.sumut,
    province.sumbar,
    province.riau,
    province.kepRiau,
    province.jambi,
    province.bengkulu,
    province.sumsel,
    province.lampung,
    province.kbb,
    province.banten,
    province.jakarta,
    province.jabar,
    province.jateng,
    province.yogyakarta,
    province.jatim,
    province.bali,
    province.ntb,
    province.ntt,
    province.kalbar,
    province.kalteng,
    province.kalsel,
    province.kaltim,
    province.kalut,
    province.sulsel,
    province.sulbar,
    province.sulteng,
    province.sultengg,
    province.gorontalo,
    province.sulut,
    province.maluku,
    province.malukuUtara,
    province.papuaBarat,
    province.papua
];

let obj_pool = [];
let obj_voteCounts = [];
let obj_userVoted = [];

let make_independence = -1;

let independence_chance = 100;

let currentDate = new Date(2030, 0, 1);

let currentEvent = {
    attacker: -1,
    victim: -1,
    attInvader: -1,
    vicInvader: -1,
    independent_region: -1,
    messages: '',
    imgData: canvas.toDataURL(),
    date: currentDate.getTime(),
    provinces: 34
}

let imgurLink = '';

exports.init = () => {
    dLines = new canvasApp.Image;
    dLines.src = imgB64.imgData;

    reDrawMap();
}

exports.initPool = (fbdb) => {
    try{
        for(var i=0; i<34; i++){
            fbdb.collection('iwb_objPoolData').doc(i.toString()).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let data = doc.data();
                    obj_pool[data.id] = data;
                }
            })
            .catch(err => {
            console.log('Error getting document', err);
            });
        }
        reDrawMap();
    }
    catch(e){
        return [false, e];
    }
    return [true, 'Success'];
}

exports.fetchData = (fbdb, handle, errHandle) => {
    try{
        for(var i=0; i<34; i++){
            obj_voteCounts[i] = 0;
            fbdb.collection('objPoolData').doc(i.toString()).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let data = doc.data();
                    obj_pool[data.id] = data;
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        }
        setTimeout(()=>{
            fbdb.collection('iwb_state').doc('state').get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let data = doc.data();
                    currentDate = new Date(data.current_date);
                    handle();
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
            reDrawMap()
        }, 10000);
    }
    catch(e){
        errHandle('Error :' + e);
        return [false, e];
    }
    return [true, 'Success'];
}

exports.updateData = (fbdb, handle) => {
    try{
        for(var i=0; i<34; i++){
            let idx = i;
            fbdb.collection('objPoolData').doc(idx.toString()).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let data = obj_pool[idx];
                    setTimeout(()=>{
                        fbdb.collection('objPoolData').doc(idx.toString()).update(data).then(() => {
                        })
                        .catch(err => {
                            console.log('Error updating document', err);
                        });
                    }, 2000);
                }
            })
            .catch(err => {
            console.log('Error getting document', err);
            });
        }
        let inv_count = Objs_GetInvaders().length;
        let cDate = currentDate.getTime();
        setTimeout(() => {
            let data = {
                invaders_count: inv_count,
                current_date: cDate
            };
            fbdb.collection('iwb_state').doc('state').update(data).then(() => {
                let fn = new Date().getTime();
                let event_date = new Date(currentEvent.date);
                let jsons = [];
                obj_pool.forEach(v => {
                    jsons.push(JSON.stringify(v));
                });
                console.log('Uploading current event to action list...');
                let db_name = fn.toString();
                fbdb.collection('action_lists').doc(db_name).set(currentEvent).then(() => {
                    console.log('Current event succesfully uploaded!');
                }).catch((e)=> {
                    console.log('Error while uploading current event :' + e);
                });
                let paste = `${jsons.join('~')}\n\n================================\n\n${JSON.stringify(data)}`;
                console.log('Creating paste for backup...');
                Pastebin.createPaste(paste, 'IWBACKUP_' + dateid.monthid(event_date.getMonth(), 3) + '-' + event_date.getFullYear() + '_' + fn, null, 2, 'N').then((d)=>{
                    console.log('Backup created on Pastebin: ' + d);
                }).catch((e)=> {
                    console.log('Backup Fail :' + e);
                    console.log('You cannot make a Rollback from this state.');
                });
                handle();
            })
            .catch(err => {
                console.log('Error updating document', err);
            });
        }, 10000);
    }
    catch(e){
        return [false, e];
    }
    return [true, 'Success'];
}

exports.resetData = (fbdb, handle, errHandle) => {
    console.log('Rolling back datas...');
    try{
        for(var i=0; i<34; i++){
            let idx = i;
            fbdb.collection('iwb_objPoolData').doc(idx.toString()).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                    throw 'No such document!';
                } else {
                    let data = doc.data();
                    fbdb.collection('objPoolData').doc(idx.toString()).update(data).then(() => {

                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                        throw 'Error getting document, ' + err;
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
                throw 'Error getting document, ' + err;
            });
        }
        setTimeout(()=>{
            console.log('All object data successfuly rolled back!');
            console.log('Rolling back state data...');
            fbdb.collection('iwb_state').doc('state_default').get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                    throw 'No such document!';
                } else {
                    let data = doc.data();
                    fbdb.collection('iwb_state').doc('state').update(data).then(() => {
                        console.log('All state data successfuly rolled back!');
                        handle();
                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                        throw 'Error getting document, ' + err;
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
                throw 'Error getting document, ' + err;
            });
            fbdb.collection('iwb_state').doc('state').update({invaders_count: 34}).then(() => {
            })
            .catch(err => {
                console.log('Error updating document', err);
                throw 'Error updating document, ' + err;
            });
        }, 5000);
    }
    catch(e){
        errHandle(e);
        return [false, e];
    }
    return [true, 'Success'];
}

exports.getProvinceRank = () => {
    return Objs_GetRank();
}

exports.getInvadersFromDB = (fbdb, handle) => {
    try{
        fbdb.collection('iwb_state').doc('state').get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                let data = doc.data();
                handle(data.invaders_count);
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }
    catch(e){
        return [false, 'Error: ' + e];
    }
    return [true, 'Invaders: ' + 'true'];
}

exports.getDateFromDB = (fbdb, handle) => {
    try {
        fbdb.collection('iwb_state').doc('state').get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                let data = doc.data();
                handle(data.current_date);
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }
    catch(e){
        return [false, 'Error: ' + e];
    }
    return [true, 'Date: ' + 'true'];
}

exports.rollback = (fbdb, rbData, handle, errHandle) => {
    console.log('Rolling back datas...');
    try{
        let split_objs = rbData.split('~');
        console.log(split_objs);
        for(var i=0; i<34; i++){
            let idx = i;
            fbdb.collection('objPoolData').doc(idx.toString()).update(JSON.parse(split_objs[i])).then(() => {
                handle();
            })
            .catch(err => {
                console.log('Error getting document', err);
                throw 'Error getting document, ' + err;
            });
        }
    }
    catch(e){
        errHandle(e);
        return [false, e];
    }
    return [true, 'Success'];
}

exports.getProvincesName = () => {
    let names = '';
    obj_pool.forEach((v) => {
        let provinceName = v.name.replace(/\s+/g, '-').toLowerCase();
        names += '\'' + provinceName + '\',';
    });
    return names;
}

exports.getProvinceName = (id) => {
    return obj_pool[id].name;
}

exports.getInvader = () => {
    return obj_pool[RandomF(0, obj_pool.length - 1)].name;
}

exports.getInvaders = function(){
    return Objs_GetInvaders().length;
}

exports.getInvaded = function(){
    return Objs_GetInvadedArea();
}

exports.getDate = function(){
    return currentDate;
}

exports.getNews = () => {
    return currentEvent;
}

exports.getAllData = () => {
    return obj_pool;
}

exports.getImgurLink = () => {
    return imgurLink;
}

exports.setImgurLink = link => {
    imgurLink = link;
}

exports.createEvent = () => {
    return _createEvent();
}

exports.lookImage = () => {
    reDrawMap();
    return '<img src="' + canvas.toDataURL() + '" />';
}

exports.lookImageIdle = () => {
    reDrawMap2();
    return '<img src="' + canvas.toDataURL() + '" />';
}

exports.getImage64 = () => {
    let base64Data = canvas.toDataURL().replace(/^data:image\/png;base64,/, "");
    return base64Data;
}

exports.makeProvinceFree = (id) => {
    make_independence = id;
}

exports.dataReadyForDiscord = () => {
    return discordReady;
}

exports.changeDiscordState = (state) =>{
    discordReady = state;
}

exports.insertVote = (data) => {
    if(obj_userVoted.includes(data.uid)) {
        return {
            success:false,
            reason:'alreadyVote'
        };
    }
    obj_voteCounts[data.for]++;
    obj_userVoted.push(data.uid);
    return {
        success:true,
        for:obj_pool[data.for].name,
    };
}

exports.dumpVoters = () => {
    let txt = '';
    obj_voteCounts.forEach((v, i) => {
        txt += obj_pool[i].name+': '+v+'<br>';
    });
    txt += '<br><br>';
    obj_userVoted.forEach((v, i) => {
        txt += '['+v+']'+(i>0?'<br>':'');
    });
    return txt;
}

exports.simulateAttacks = () => {

    Objs_ActionIdle();

    let svictim, svictimObj, sattacker, sattackerObj;
    let svicInvader, svicInvaderObj, sattInvader, sattInvaderObj;

    let snotSameInvaders = [];

    let simulateDone = false;
    while(!simulateDone){
        // svictim = RandomF(0, obj_pool.length - 1);
        
        schosen = obj_pool[Obj_RandomPrioritize(provIDs.sumbar)];
        svictim = schosen.occupiedArea[RandomF(0, schosen.occupiedArea.length-1)];

        svictimObj = obj_pool[svictim];
    
        let snearby = svictimObj.neighbors;
        let sflag_noSameInvader = false;
    
        snotSameInvaders.length = 0;
        
        snearby.forEach(val => {
            let sneighbor_invader = obj_pool[val].invader;
            if(sneighbor_invader != svictimObj.invader){
                sflag_noSameInvader = true;
                snotSameInvaders.push(sneighbor_invader);
            }
        });
    
        if(!sflag_noSameInvader){
            continue;
        }
    
        svicInvader = svictimObj.invader;
        svicInvaderObj = obj_pool[svicInvader];
    
        sattacker = Obj_GetInvaderWithMostArea(snotSameInvaders);
        sattackerObj = obj_pool[sattacker];
    
        sattInvader = sattackerObj.invader;
        sattInvaderObj = obj_pool[sattInvader];

        simulateDone = true;
    }
    
    invade(sattacker, svictim);

    reDrawMap();

    let base64Data = canvas.toDataURL().replace(/^data:image\/png;base64,/, "");

    return {
        attacker: sattackerObj.name,
        victim: svictimObj.name,
        attInvader: sattInvaderObj.name,
        vicInvader: svicInvaderObj.name,
        imgData: base64Data
    }
}

function _createEvent() {

    Objs_ActionIdle();

    let invaded = Objs_GetInvadedArea();
    let freed_chance = RandomF(0, independence_chance);

    if(freed_chance == -1 && invaded.length > 5){
        let freed = invaded[RandomF(0, invaded.length - 1)];

        let invader = Obj_Free(freed);
        let invaderName = Obj_GetName(invader);

        let msg = dateid.dateid(currentDate) + ', ' + Obj_GetName(freed) + ' berhasil terbebas dari ' + invaderName + ' dan meraih Kemerdekaan!';
        
        if(!Obj_HasArea(invader)){
            msg += '\n' + invaderName + ' telah dikalahkan.';
        }

        msg += '\n\n' + CheckInvaded()[1];        

        reDrawMap();

        let cDate = currentDate.getTime();
        currentDate.setMonth(currentDate.getMonth()+1);

        let base64Data = canvas.toDataURL().replace(/^data:image\/png;base64,/, "");
        require("fs").writeFile('./img/'+cDate+'.png', base64Data, 'base64', function(err) {
            console.log(err);
        });

        make_independence = -1;

        independence_chance = independence_chance * 2;
        
        currentEvent = {
            attacker: -1,
            victim: -1,
            attInvader: -1,
            vicInvader: -1,
            independent_region: freed,
            messages: msg,
            imgData: canvas.toDataURL(),
            date: cDate,
            provinces: Objs_GetInvaders().length
        }

        return {
            attacker: -1,
            victim: -1,
            attInvader: -1,
            vicInvader: -1,
            independent_region: freed,
            messages: msg,
            imgData: canvas.toDataURL(),
            date: cDate,
            provinces: Objs_GetInvaders().length
        };
    }

    let victim, victimObj, attacker, attackerObj;
    let vicInvader, vicInvaderObj, attInvader, attInvaderObj;

    let notSameInvaders = [];
    let isVictimReadyToAttacked = false;

    if(Objs_GetInvaders().length == 2){
        let invaders = Objs_GetInvaders();
        let invadersObj = [
            obj_pool[invaders[0]],
            obj_pool[invaders[1]]
        ];	
        let chanceA = invadersObj[0].occupiedArea.length;
        let chanceB = invadersObj[1].occupiedArea.length;
        
        let rng_decide = RandomF(0, 33);
        if(rng_decide >= 0 && rng_decide < chanceA){
            while(!isVictimReadyToAttacked){
                victim = invadersObj[1].occupiedArea[RandomF(0, invadersObj[1].occupiedArea.length - 1)];
                victimObj = obj_pool[victim];

                let nearby = obj_pool[victim].neighbors;
                let flag_noSameInvader = false;

                notSameInvaders.length = 0;
                
                nearby.forEach(val => {
                    let neighbor_invader = obj_pool[val].invader;
                    if(neighbor_invader != victimObj.invader){
                        flag_noSameInvader = true;
                        notSameInvaders.push(neighbor_invader);
                    }
                });

                if(!flag_noSameInvader){
                    continue;
                }

                vicInvader = victimObj.invader;
                vicInvaderObj = obj_pool[vicInvader];

                attacker = Obj_GetInvaderWithMostArea(notSameInvaders);
                attackerObj = obj_pool[attacker];

                attInvader = attackerObj.invader;
                attInvaderObj = obj_pool[attInvader];

                isVictimReadyToAttacked = true;
            }
        }
        else if(rng_decide >= chanceA && rng_decide < (chanceA + chanceB)){
            while(!isVictimReadyToAttacked){
                victim = invadersObj[0].occupiedArea[RandomF(0, invadersObj[0].occupiedArea.length - 1)];
                victimObj = obj_pool[victim];

                let nearby = obj_pool[victim].neighbors;
                let flag_noSameInvader = false;

                notSameInvaders.length = 0;
                
                nearby.forEach(val => {
                    let neighbor_invader = obj_pool[val].invader;
                    if(neighbor_invader != victimObj.invader){
                        flag_noSameInvader = true;
                        notSameInvaders.push(neighbor_invader);
                    }
                });

                if(!flag_noSameInvader){
                    continue;
                }

                vicInvader = victimObj.invader;
                vicInvaderObj = obj_pool[vicInvader];

                attacker = Obj_GetInvaderWithMostArea(notSameInvaders);
                attackerObj = obj_pool[attacker];

                attInvader = attackerObj.invader;
                attInvaderObj = obj_pool[attInvader];

                isVictimReadyToAttacked = true;
            }
        }
        else {
            _createEvent();
        }
    }
    else{
        while(!isVictimReadyToAttacked){
            // victim = RandomF(0, obj_pool.length - 1);
            
        
            let chosen = obj_pool[Obj_RandomPrioritize(provIDs.sumbar)];
            victim = chosen.occupiedArea[RandomF(0, chosen.occupiedArea.length-1)];

            victimObj = obj_pool[victim];

            let nearby = victimObj.neighbors;
            let flag_noSameInvader = false;

            notSameInvaders.length = 0;
            
            nearby.forEach(val => {
                let neighbor_invader = obj_pool[val].invader;
                if(neighbor_invader != victimObj.invader){
                    flag_noSameInvader = true;
                    notSameInvaders.push(neighbor_invader);
                }
            });

            if(!flag_noSameInvader){
                continue;
            }

            vicInvader = victimObj.invader;
            vicInvaderObj = obj_pool[vicInvader];

            attacker = Obj_GetInvaderWithMostArea(notSameInvaders);
            attackerObj = obj_pool[attacker];

            attInvader = attackerObj.invader;
            attInvaderObj = obj_pool[attInvader];

            isVictimReadyToAttacked = true;
        }
    }

    let invaderName = Obj_GetName(attacker);
    let victimName = Obj_GetName(victim);
    let victimInvaderName = Obj_GetName(vicInvader);

    invade(attacker, victim);

    let msg = dateid.dateid(currentDate) + ', ' + invaderName + ' menduduki wilayah ' + victimName;

    if(invaderName != victimInvaderName && victimName != victimInvaderName){
    	msg += ' yang sebelumnya dikuasai oleh ' + victimInvaderName;
    }
    else{
        msg += '.';
    }

    if(!Obj_HasArea(vicInvader)){
        msg += '\n' + victimInvaderName + ' telah dikalahkan.';
        msg += '\n\n' + CheckInvaded()[1];
    }

    console.log('Spoiler: '+msg);

    reDrawMap();

    let cDate = currentDate.getTime();

    let base64Data = canvas.toDataURL().replace(/^data:image\/png;base64,/, "");
    require("fs").writeFile('./img/'+cDate+'.png', base64Data, 'base64', function(err) {
        console.log(err);
    });

    currentDate.setMonth(currentDate.getMonth()+1);

    currentEvent = {
        attacker: attacker,
        victim: victim,
        attInvader: attInvader,
        vicInvader: vicInvader,
        independent_region: -1,
        messages: msg,
        imgData: canvas.toDataURL(),
        date: cDate,
        provinces: Objs_GetInvaders().length
    }

    return {
        attacker: attacker,
        victim: victim,
        attInvader: attInvader,
        vicInvader: vicInvader,
        independent_region: -1,
        messages: msg,
        imgData: canvas.toDataURL(),
        date: cDate,
        provinces: Objs_GetInvaders().length
    };
}

function invade(aId, vId){
	var victim = obj_pool[vId];
    var victimInvader = victim.invader;

	Obj_SetAction(aId, 'attack');
	Obj_SetAction(vId, 'victim');

	Obj_AddColony(aId, vId);
    Obj_RemoveColony(victimInvader, vId);
    
	if(!victim.invaded){
		vicNotInvadedBefore = true;
	}
	victim.canAttack = false;
	victim.invaded = true;
	victim.invader = aId;
	victim.color = Obj_Get(aId).main_color;
}

function CheckInvaded(){
    let invaders = Objs_GetInvaders();

	if(invaders.length == 1){
		let msg = 'Semua Provinsi di Indonesia telah dikuasai oleh ' + Obj_GetName(invaders[0]);
		return [true, msg];
	}
	else{
		let msg = invaders.length + ' provinsi tersisa.';
		return [false, msg];
	}
}

function reDrawMap(){
	context.clearRect(0, 0, 2000, 1000);
	context.fillStyle = 'rgb(140, 184, 255)';
	context.fillRect(0, 0, 2000, 1000);
	obj_pool.forEach((obj, i) => Obj_Draw(obj));
}

function reDrawMap2(){
	context.clearRect(0, 0, 2000, 1000);
	context.fillStyle = 'rgb(140, 184, 255)';
	context.fillRect(0, 0, 2000, 1000);
	obj_pool.forEach((obj, i) => Obj_DrawNoStroke(obj));
}

function RandomF(n, x){
	return Math.floor(Math.random()*(x-n+1)-n);
}

// ==========================================================
// BATCH OBJECT FUNCTION

function Objs_ActionIdle(){
	for(var obj of obj_pool){
		obj.action = 'idle';
	}
}

function Objs_GetInvaders(){
	var invaders = [];

	for(var i=0; i<obj_pool.length; i++){
		if(!invaders.includes(obj_pool[i].invader, 0)){
			invaders.push(obj_pool[i].invader);
		}
	}

	return invaders;
}

function Objs_GetInvadedArea(){
    var areas = [];

	for(var i=0; i<obj_pool.length; i++){
		if(obj_pool[i].occupiedArea.length == 0){
			areas.push(obj_pool[i].id);
		}
	}

	return areas;
}

function Objs_GetRank(){
    var invaders = Objs_GetInvaders();
    var invaderObj = {}, resultObj = {};

    invaders.forEach(v => {invaderObj[obj_pool[v].name] = obj_pool[v].occupiedArea.length});

    var sorted = Object.entries(invaderObj).sort((a, b) => b[1] - a[1]);
    sorted.forEach((v, i) => {
        if(i < 10) resultObj[v[0]] = v[1];
    });

    return resultObj;
}

// ==========================================================
// OBJECT FUNCTIONS

// Randomize Choice but Prioritize the given Province ID
// (Raise the given ID chance to be choosen)
function Obj_RandomPrioritize(provinceID){
    // Get All Remaining Provinces
    let provinces = Objs_GetInvaders();
    // Map the IDs to Array
    let invadersID = [];
    provinces.forEach(v=>{
        invadersID.push(v);
    });
    // Randomize from 1 to 100
    //   If Result less than 50, choose the Priority ID
    if(RandomF(1, 100) < 50){
        return provinceID;
    }
    //   Else, exclude the given ID from Mapped Array
    //   then choose random Province ID from Mapped Array
    else{
        invadersID.filter(v => v !== provinceID);
        let chosen = invadersID[RandomF(0, invadersID.length-1)];
        return chosen;
    }
}

let vinvad = -1;
function Obj_Draw(obj){
    context.fillStyle = obj.color;
    if(obj.action == 'attack'){
        context.strokeStyle = 'lime';
        context.lineWidth = 2;
    }
    else if(obj.action == 'victim'){
        context.strokeStyle = 'red';
        context.lineWidth = 2;
    }
    else if(obj.action == 'victimInvader'){
        vinvad = obj.id;
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
    }
    else {
        context.strokeStyle = 'black';
        context.lineWidth = 1;
    }
    provinceData[obj.id].draw(context);

    if(obj.action == 'victim'){
        context.fillStyle = context.createPattern(dLines, "repeat");

        // let grad = context.createLinearGradient(0, 0, 500, 500);
        // let limit = 128;
        // let vcolor = Obj_Get(currentEvent.vicInvader).color;
        // let acolor = Obj_Get(currentEvent.attacker).color;
        // for(let i=0; i<limit; i++){
        //     let incr = i*2;
        //     let incr2 = i*2+1;
        //     grad.addColorStop(incr / (limit*2), vcolor);
        //     grad.addColorStop(incr2 / (limit*2), acolor);
        // }
        // context.fillStyle = grad;

        provinceData[obj.id].draw(context);
    }
}

function Obj_DrawNoStroke(obj){
    context.fillStyle = obj.color;
    context.strokeStyle = 'black';
    provinceData[obj.id].draw(context);
}

function Obj_Get(id){
	return obj_pool[id];
}

function Obj_GetName(id){
	return Obj_Get(id).name;
}

function Obj_AddColony(id, area){
	Obj_Get(id).occupiedArea.push(area);
}

function Obj_RemoveColony(id, vict){
	var colonies = Obj_Get(id).occupiedArea;
	var index = colonies.indexOf(vict);
	if (index > -1) {
		colonies.splice(index, 1);
        console.log(Obj_Get(id).name + ' losing ' + Obj_Get(vict).name);
		return true;
	}
    return false;
}

function Obj_Free(id){
    var obj = obj_pool[id];
    var invader = obj.invader;
    var invaderObj = obj_pool[invader];

    console.log('Invader: ' + invaderObj.name);

    invaderObj.occupiedArea.splice(invaderObj.occupiedArea.indexOf(id), 1);

    obj.action = 'attack';
    obj.invaded = false;
    obj.invader = obj.id;
    obj.canAttack = true;
    obj.occupiedArea.length = 1;
    obj.occupiedArea[0] = obj.id;
    obj.color = obj.main_color;

    if(Obj_HasArea(invaderObj.id)){
        invaderObj.occupiedArea.forEach(v => {
            Obj_SetAction(v, 'victimIndep');
        });
    }

    return invader;
}

function Obj_HasArea(id){
	var obj = Obj_Get(id);
	var colony = obj.occupiedArea;
	if(colony.length > 0){
		return true;
	}
	return false;
}

function Obj_SetAction(id, action){
	var obj = Obj_Get(id);
	if(action == 'attack'){
		obj.occupiedArea.forEach((objs) => Obj_Get(objs).action = 'attack');
		// obj.action = 'attack';
	}
	else if(action == 'victim'){
		Obj_Get(obj.invader).occupiedArea.forEach((objs) => Obj_Get(objs).action = 'victimInvader');
		obj.action = 'victim';
    }
    else if(action == 'victimIndep'){
		Obj_Get(obj.invader).occupiedArea.forEach((objs) => Obj_Get(objs).action = 'victimInvader');
    }
}

function Obj_GetInvaderWithMostArea(arr){
	var areaCount = 0;
	var invader = [];
	arr.forEach(v => {
		if(obj_pool[v].occupiedArea.length > areaCount){
			invader.length = 0;
			invader[0] = v;
			areaCount = obj_pool[v].occupiedArea.length;
		}
		else if(obj_pool[v].occupiedArea.length == areaCount){
			invader.push(v);
		}
	});

	return (invader.length == 1 ? invader[0] : invader[RandomF(0, invader.length - 1)] );
}