let context;

exports.draw = (ctx) => {
    context = ctx;
    drawSulut(50);
}

function drawSulut(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*1399, sc*337);
    context.lineTo(sc*1440, sc*329);
    context.lineTo(sc*1444, sc*323);
    context.lineTo(sc*1449, sc*312);
    context.lineTo(sc*1460, sc*304);
    context.lineTo(sc*1469, sc*284);
    context.lineTo(sc*1476, sc*280);
    context.lineTo(sc*1477, sc*284);
    context.lineTo(sc*1472, sc*284);
    context.lineTo(sc*1476, sc*281);
    context.lineTo(sc*1476, sc*278);
    context.lineTo(sc*1472, sc*277);
    context.lineTo(sc*1472, sc*273);
    context.lineTo(sc*1466, sc*273);
    context.lineTo(sc*1464, sc*268);
    context.lineTo(sc*1456, sc*276);
    context.lineTo(sc*1457, sc*281);
    context.lineTo(sc*1450, sc*284);
    context.lineTo(sc*1446, sc*284);
    context.lineTo(sc*1442, sc*289);
    context.lineTo(sc*1446, sc*291);
    context.lineTo(sc*1444, sc*295);
    context.lineTo(sc*1436, sc*295);
    context.lineTo(sc*1434, sc*297);
    context.lineTo(sc*1432, sc*302);
    context.lineTo(sc*1414, sc*310);
    context.lineTo(sc*1388, sc*306);
    context.lineTo(sc*1383, sc*307);
    context.lineTo(sc*1382, sc*305);
    context.lineTo(sc*1374, sc*306);
    context.lineTo(sc*1380, sc*311);
    context.lineTo(sc*1382, sc*316);
    context.lineTo(sc*1391, sc*322);
    context.lineTo(sc*1394, sc*328);
    context.lineTo(sc*1392, sc*334);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1469, sc*269);
    context.lineTo(sc*1472, sc*266);
    context.lineTo(sc*1470, sc*264);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1480, sc*254);
    context.lineTo(sc*1484, sc*251);
    context.lineTo(sc*1480, sc*251);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1482, sc*242);
    context.lineTo(sc*1484, sc*242);
    context.lineTo(sc*1484, sc*240);
    context.lineTo(sc*1482, sc*240);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1482, sc*227);
    context.lineTo(sc*1484, sc*227);
    context.lineTo(sc*1482, sc*224);
    context.lineTo(sc*1484, sc*221);
    context.lineTo(sc*1484, sc*218);
    context.lineTo(sc*1482, sc*218);
    context.lineTo(sc*1481, sc*223);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1488, sc*183);
    context.lineTo(sc*1488, sc*188);
    context.lineTo(sc*1492, sc*190);
    context.lineTo(sc*1495, sc*190);
    context.lineTo(sc*1488, sc*177);
    context.lineTo(sc*1485, sc*174);
    context.lineTo(sc*1483, sc*177);
    context.lineTo(sc*1485, sc*181);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1548, sc*171);
    context.lineTo(sc*1546, sc*171);
    context.lineTo(sc*1549, sc*177);
    context.lineTo(sc*1550, sc*174);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1542, sc*163);
    context.lineTo(sc*1544, sc*168);
    context.lineTo(sc*1542, sc*172);
    context.lineTo(sc*1539, sc*162);
    context.closePath();
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(sc*1542, sc*162);
    context.lineTo(sc*1545, sc*162);
    context.lineTo(sc*1549, sc*162);
    context.lineTo(sc*1549, sc*155);
    context.lineTo(sc*1552, sc*151);
    context.lineTo(sc*1552, sc*148);
    context.lineTo(sc*1552, sc*142);
    context.lineTo(sc*1550, sc*138);
    context.lineTo(sc*1546, sc*138);
    context.lineTo(sc*1546, sc*140);
    context.lineTo(sc*1543, sc*144);
    context.lineTo(sc*1544, sc*150);
    context.lineTo(sc*1547, sc*153);
    context.closePath();
    context.fill();
    context.stroke();
}