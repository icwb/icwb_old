let context;

exports.draw = (ctx) => {
    context = ctx;
    drawRiau(50);
}

function drawRiau(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*307, sc*233);
    context.lineTo(sc*306, sc*262);
    context.lineTo(sc*311, sc*276);
    context.lineTo(sc*294, sc*284);
    context.lineTo(sc*303, sc*296);
    context.lineTo(sc*299, sc*314);
    context.lineTo(sc*302, sc*318);
    context.lineTo(sc*300, sc*320);
    context.lineTo(sc*307, sc*331);
    context.lineTo(sc*315, sc*328);
    context.lineTo(sc*331, sc*340);
    context.lineTo(sc*332, sc*354);
    context.lineTo(sc*327, sc*354);
    context.lineTo(sc*331, sc*365);
    context.lineTo(sc*340, sc*370);
    context.lineTo(sc*374, sc*398);
    context.lineTo(sc*380, sc*396);
    context.lineTo(sc*384, sc*390);
    context.lineTo(sc*390, sc*390);
    context.lineTo(sc*397, sc*390);
    context.lineTo(sc*406, sc*400);
    context.lineTo(sc*412, sc*400);
    context.lineTo(sc*425, sc*386);
    context.lineTo(sc*454, sc*386);
    context.lineTo(sc*450, sc*373);
    context.lineTo(sc*460, sc*370);
    context.lineTo(sc*455, sc*368);
    context.lineTo(sc*448, sc*366);
    context.lineTo(sc*455, sc*361);
    context.lineTo(sc*446, sc*361);
    context.lineTo(sc*454, sc*358);
    context.lineTo(sc*455, sc*355);
    context.lineTo(sc*458, sc*354);
    context.lineTo(sc*469, sc*349);
    context.lineTo(sc*465, sc*334);
    context.lineTo(sc*462, sc*334);
    context.lineTo(sc*450, sc*326);
    context.lineTo(sc*412, sc*342);
    context.lineTo(sc*435, sc*328);
    context.lineTo(sc*428, sc*317);
    context.lineTo(sc*411, sc*316);
    context.lineTo(sc*394, sc*302);
    context.lineTo(sc*392, sc*288);
    context.lineTo(sc*370, sc*271);
    context.lineTo(sc*366, sc*274);
    context.lineTo(sc*356, sc*270);
    context.lineTo(sc*353, sc*256);
    context.lineTo(sc*341, sc*246);
    context.lineTo(sc*340, sc*242);
    context.lineTo(sc*332, sc*244);
    context.lineTo(sc*330, sc*250);
    context.lineTo(sc*336, sc*265);
    context.lineTo(sc*332, sc*257);
    context.lineTo(sc*322, sc*250);
    context.lineTo(sc*310, sc*242);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*360, sc*252);
    context.lineTo(sc*358, sc*260);
    context.lineTo(sc*361, sc*268);
    context.lineTo(sc*366, sc*269);
    context.lineTo(sc*371, sc*266);
    context.lineTo(sc*372, sc*263);
    context.lineTo(sc*376, sc*259);
    context.lineTo(sc*369, sc*250);
    context.lineTo(sc*365, sc*253);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*385, sc*275);
    context.lineTo(sc*391, sc*281);
    context.lineTo(sc*399, sc*283);
    context.lineTo(sc*408, sc*290);
    context.lineTo(sc*408, sc*282);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*396, sc*284);
    context.lineTo(sc*408, sc*293);
    context.lineTo(sc*407, sc*300);
    context.lineTo(sc*407, sc*305);
    context.lineTo(sc*403, sc*305);
    context.lineTo(sc*397, sc*300);
    context.lineTo(sc*397, sc*294);
    context.lineTo(sc*396, sc*291);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*408, sc*299);
    context.lineTo(sc*410, sc*306);
    context.lineTo(sc*406, sc*306);
    context.lineTo(sc*410, sc*312);
    context.lineTo(sc*418, sc*312);
    context.lineTo(sc*427, sc*314);
    context.lineTo(sc*433, sc*316);
    context.lineTo(sc*433, sc*312);
    context.lineTo(sc*421, sc*302);
    context.lineTo(sc*414, sc*302);
    context.lineTo(sc*411, sc*297);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*415, sc*303);
    context.lineTo(sc*421, sc*302);
    context.lineTo(sc*435, sc*311);
    context.lineTo(sc*440, sc*308);
    context.lineTo(sc*431, sc*299);
    context.lineTo(sc*420, sc*297);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*441, sc*326);
    context.lineTo(sc*446, sc*324);
    context.lineTo(sc*444, sc*316);
    context.lineTo(sc*440, sc*316);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*454, sc*366);
    context.lineTo(sc*458, sc*360);
    context.lineTo(sc*467, sc*362);
    context.lineTo(sc*460, sc*367);
    context.closePath();
    context.fill();
    context.stroke();
}