const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');

require('dotenv').config();

const port = process.env.PORT || 4000;

const imgur = require('imgur');

imgur.setAPIUrl('https://api.imgur.com/3/');
imgur.getAPIUrl();

const main = require('./lib/main_func.js');

const fbaseAdmin = require('firebase-admin');
const serviceAccount = require('./lib/firebase_credential/iwb2030-firebase-adminsdk-d2ta1-59ff465701.json');
fbaseAdmin.initializeApp({
    credential: fbaseAdmin.credential.cert(serviceAccount),
    databaseUrl: 'https://iwb2030.firebase.io'
});
const db = fbaseAdmin.firestore();

let initPool_msg = main.fetchData(db, startBotPosting, (err)=>{console.log(err)}) || [false, 'InitPool: Unknown Error'];
if(initPool_msg[0]) console.log(initPool_msg[1] + '. Preparing...');
else console.error('Error: ' + initPool_msg[1]);

main.init();

http.createServer((rq, rs) => {
    let uri = url.parse(rq.url, true).pathname.slice(1);

    if(uri == 'index.html' || uri == '' || uri == 'home'){
        fs.readFile('index.html', (er, dt)=>{
            if(er){
                rs.writeHead(500, {'Content-Type': 'text/html'});
                rs.end(dt);
            }
            rs.writeHead(200, {
                'Content-Type': 'text/html',
                'Img-Map': main.lookImage()
            });
            rs.write(dt);
            rs.end();
        });
    }
    else if(uri == 'Z2V0TmV3cw'){
        let json = main.getNews();
        let str = '';

        if(json.messages == '' || typeof json === 'undefined' || typeof json === 'null'){
            json = {
                messages: 'No Data',
                imgData: ''
            }
        }
        
        str = JSON.stringify(main.getNews());
        
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(str);
        rs.end();
    }
    else if(uri == 'getInvader'){
        let img_data = main.getInvaders().toString();
        
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(img_data);
        rs.end();
    }
    else if(uri == 'getImage'){
        let img_data = main.lookImage();
        
        let html = `<!DOCTYPE html>
        <html>
            <body>
            ${img_data}
            </body>
        </html>`;
        
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(html);
        rs.end();
    }
    else if(uri == 'Z2V0SW1hZ2VTaXh5Rm9y'){
        let img_data = main.getImage64();
        rs.writeHead(200, {'Content-Type': 'image/png'});
        rs.end(img_data, 'base64');
    }
    else if(uri == 'getImageIdle'){
        let img_data = main.lookImageIdle();
        
        let html = `<!DOCTYPE html>
        <html>
            <body>
            ${img_data}
            </body>
        </html>`;
        
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(html);
        rs.end();
    }
    else if(uri == 'getName'){
        let rnd = Math.floor(Math.random()*(34-0+1)-0);
        let name = main.getProvinceName(rnd);
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(name);
        rs.end();
    }
    else if(uri == 'Z2V0SW1ndXI'){
        let imgur = main.getImgurLink().toString();
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(imgur);
        rs.end();
    }
    else if(uri == 'getRank'){
        let rankings = '';
        let provinces = Object.entries(main.getProvinceRank());
        provinces.forEach((v, i) => {
            rankings += (i+1) + '. ' + v[0] + ' (' + v[1] + ')';
            if(i < 9) rankings += '\n';
        });
        let ranking_text = 'ICWBot mengucapkan Selamat Hari Raya Idul Fitri 1440H.\n\nTop '+ provinces.length.toString() +' Provinsi dengan jumlah wilayah yang dikuasai:\n\n' + rankings;
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(ranking_text);
        rs.end();
    }
    else if(uri == 'Z2V0UmFua0pTT04'){
        let text = JSON.stringify(main.getProvinceRank());
        rs.writeHead(200, {'Content-Type': 'application/json'});
        rs.write(text);
        rs.end();
    }
    else if(uri == 'getProvinces'){
        let text = main.getProvincesName();
        rs.writeHead(200, {'Content-Type': 'application/json'});
        rs.write(text);
        rs.end();
    }
    else if(uri == 'getInvaded'){
        let text = '';
        main.getInvaded().forEach(v => {
            text += v + ', ';
        });
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(text);
        rs.end();
    }
    else if(uri == 'makeProvinceFree'){
        let q = url.parse(rq.url, true).query;
        let area = q.area || -1;
        main.makeProvinceFree(area);
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write('Area with id ' + q.area + ' will gained independence.');
        rs.end();
    }
    else if(uri == 'cmVzZXRQcm9ncmVzcw'){
        main.resetData(db, () => {
            rs.writeHead(200, {'Content-Type': 'text/html'});
            rs.write('All Objects data is rolledback');
            rs.end();
        }, (e) => {
            rs.writeHead(500, {'Content-Type': 'text/html'});
            rs.write('Fail to rollback object data. : ' + e);
            rs.end();
        });
    }
    else if(uri == 'Z2V0RGlzY29yZFN0YXRl'){
        let isReady = {
            ready: main.dataReadyForDiscord(),
        }
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(JSON.stringify(isReady));
        rs.end();
    }
    else if(uri == 'ZGlzY29yZFVucmVhZHk'){
        main.changeDiscordState(false);
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write('Discord ready state changed to FALSE');
        rs.end();
    }
    else if(uri == 'discordReady'){
        main.changeDiscordState(true);
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write('Discord ready state changed to TRUE');
        rs.end();
    }
    else if(uri == 'getInv'){
        let txt = main.getInvader();
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(txt);
        rs.end();
    }
    else if(uri == 'simulate'){
        let txt = JSON.stringify(main.simulateAttacks());
        rs.writeHead(200, {'Content-Type': 'application/json'});
        rs.write(txt);
        rs.end();
    }
    else if(uri == 'insertVote'){
        let q = url.parse(rq.url, true).query;
        let res = main.insertVote({
            uid: q.voter,
            for: q.voteID
        });
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(JSON.stringify(res));
        rs.end();
    }
    else if(uri == 'dumpVoters'){
        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(main.dumpVoters());
        rs.end();
    }
    else if(uri == 'rollBackDataTo') {
        let html = `<!DOCTYPE html>
        <html>
            <head>
                <title>Rollback Data from Pastebin</title>
            </head>
            <body>
                <form method="GET" action="http://localhost:4000/rollBackData">
                    Link: <input name="links"> <button type="submit">ROLLBACK</button>
                </form>
            </body>
        </html>`;

        rs.writeHead(200, {'Content-Type': 'text/html'});
        rs.write(html);
        rs.end();
    }
    else if(uri == 'rollBackData'){
        let q = url.parse(rq.url, true).query;
        https.get(q.links, result => {
            let dataEnd = '';
            result.on('data', (chunk) => {
                dataEnd += chunk;
            });
            result.on('end', () => {
                main.rollback(db, dataEnd, () => {
                    rs.writeHead(200, {'Content-Type': 'text/html'});
                    rs.end('All Objects data is rolledback.');
                }, (e) => {
                    rs.writeHead(500, {'Content-Type': 'text/html'});
                    rs.write('Fail to rollback object data. : ' + e);
                    rs.end();
                });
            });
        });
    }
    else{
        rs.writeHead(404, {'Content-Type': 'text/html'});
        rs.write('<h1>404</h1><hr>');
        rs.end();
    }

    
}).listen(port);

function startBotPosting(){
    main.getInvadersFromDB(db, (count) => {
        if(count > 1){
            console.log(count);
            console.log('1 minutes before posting...');
            setTimeout(()=>{
                console.log('Ready to post in 10 seconds!');
            }, 1000 * 60 * 10 - 10000);
            setTimeout(()=>{
                bot_post();
            }, 1000 * 60);
        }
        else {
            console.log('App is finished. Need rollback');
        }
    });
}

function bot_post(){
    console.log('Posting....');

    let event_data = main.createEvent();

    // Upload to FB 

    let jsons = main.getNews();
    let img = jsons.imgData;
    let msg = jsons.messages;

    let access_token = process.env.FB_TOKEN;
    let fb_pageID = process.env.FB_PAGEID;
    
    let base64Data = img.replace(/^data:image\/png;base64,/, "");
    
    imgur.uploadBase64(base64Data)
    .then(function (json) {

        https.get('https://graph.facebook.com/'+fb_pageID+'/photos?method=POST&url='+json.data.link+'&caption='+msg+'&access_token='+access_token, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {

                let fb_json = JSON.parse(data);

                console.log('Imgur Link: ' + json.data.link);
                console.log('Posted to FB with ID: ' + fb_json.id);
                console.log('Posting Ranking on Post\'s Comment...');

                let rankings = '';
                let provinces = Object.entries(main.getProvinceRank());
                provinces.forEach((v, i) => {
                    rankings += (i+1) + '. ' + v[0] + ' (' + v[1] + ')';
                    if(i < 9) rankings += '\n';
                });

                let ranking_text = 'Top '+ provinces.length.toString() +' Provinsi dengan jumlah wilayah yang dikuasai:\n\n' + rankings;

                https.get('https://graph.facebook.com/' + fb_pageID + '_' + fb_json.id + '/comments?method=POST&message=' + ranking_text + '&access_token=' + access_token, (resp2) => {
                    resp2.on('end', () => {
                        console.log('Ranking is commented on post!');
                    });
                }).on('error', () => { console.log("Error: " + err.message) });
                
                main.setImgurLink(json.data.link);
                
                console.log('Updating Data to Firebase...');
                setTimeout(()=>{
                    main.updateData(db, () => {
                        main.changeDiscordState(true);
                        console.log('Data Updated!');
                        if(main.getInvaders() <= 1){
                            console.log('App Finished!');
                        }
                        else{
                            console.log('Ready to post in 1 hours!');
                            setTimeout(()=>{console.log('Ready to post in 50 minutes!')}, 1000 * 60 * 10);
                            setTimeout(()=>{console.log('Ready to post in 30 minutes!')}, 1000 * 60 * 30);
                            setTimeout(()=>{console.log('Ready to post in 10 minutes!')}, 1000 * 60 * 50);
                            setTimeout(()=>{console.log('Ready to post in 10 seconds!')}, 1000 * 3590);
                            setTimeout(bot_post, 1000 * 3600);
                        }
                    });
                }, 1000 * 5);

            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })
    .catch(function (err) {
        console.error(err.message);
    });
}