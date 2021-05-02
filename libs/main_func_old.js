const imgB64 = require('./img/dLines.json');
let dLines;

const dateid = require('./date_toID.js');

const canvasApp = require('canvas');
const canvas = canvasApp.createCanvas(1150, 450);
const context = canvas.getContext('2d')

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

let currentDate = new Date(2030, 0, 1);

let currentObj = {
    attacker: -1,
    victim: -1,
    attInvader: -1,
    vicInvader: -1,
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
        handle();
        setTimeout(()=>{reDrawMap()}, 10000);
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
        handle();
        let inv_count = Objs_GetInvaders().length;
        setTimeout(() => {
            fbdb.collection('iwb_state').doc('state').update({invaders_count: inv_count}).then(() => {
            })
            .catch(err => {
                console.log('Error updating document', err);
            });
        }, 5000);
    }
    catch(e){
        return [false, e];
    }
    return [true, 'Success'];
}

exports.resetData = (fbdb, handle, errHandle) => {
    try{
        for(var i=0; i<34; i++){
            let idx = i;
            fbdb.collection('iwb_objPoolData').doc(idx.toString()).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let data = doc.data();
                    fbdb.collection('objPoolData').doc(idx.toString()).update(data).then(() => {
                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                    });;
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        }
        setTimeout(()=>{
            console.log('All data successfuly rolled back');
            fbdb.collection('iwb_state').doc('state').update({invaders_count: 34}).then(() => {
            })
            .catch(err => {
                console.log('Error updating document', err);
            });
        }, 3000);
    }
    catch(e){
        errHandle(e);
        return [false, e];
    }
    handle();
    return [true, 'Success'];
}

exports.getInvadersFromDB = (fbdb, handle) => {
    let invaders_count = 0;
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
    return [true, 'Invaders: ' + invaders_count];
}

exports.getProvinceName = (id) => {
    return obj_pool[id].name;
}

exports.getInvaders = function(){
    return Objs_GetInvaders().length;
}

exports.getNews = () => {
    return currentObj;
}

exports.getAllData = () => {
    return obj_pool;
}

exports.setImgurLink = link => {
    imgurLink = link;
}

exports.getImgurLink = () => {
    return imgurLink;
}

exports.createEvent = () => {
    return _createEvent();
}

exports.lookImage = () => {
    reDrawMap();
    return '<img src="' + canvas.toDataURL() + '" />';
}

function _createEvent() {

    Objs_ActionIdle();

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
        
        let rng_decide = Random(0, 33);
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
            victim = RandomF(0, obj_pool.length - 1);
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

    reDrawMap();

    let cDate = currentDate.getTime();

    let base64Data = canvas.toDataURL().replace(/^data:image\/png;base64,/, "");
    require("fs").writeFile('./img/'+cDate+'.png', base64Data, 'base64', function(err) {
        console.log(err);
    });

    currentDate.setMonth(currentDate.getMonth()+1);

    currentObj = {
        attacker: attacker,
        victim: victim,
        attInvader: attInvader,
        vicInvader: vicInvader,
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

// ==========================================================
// OBJECT FUNCTIONS

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
        provinceData[obj.id].draw(context);
    }
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
		return true;
	}
	return false;
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
		obj.action = 'attack';
	}
	else if(action == 'victim'){
		Obj_Get(obj.invader).occupiedArea.forEach((objs) => Obj_Get(objs).action = 'victimInvader');
		obj.action = 'victim';
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