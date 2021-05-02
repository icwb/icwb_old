let context;

exports.draw = (ctx) => {
    context = ctx;
    drawGorontalo(50);
}

function drawGorontalo(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*1354, sc*306);
    context.lineTo(sc*1362, sc*311);
    context.lineTo(sc*1369, sc*305);
    context.lineTo(sc*1374, sc*306);
    context.lineTo(sc*1380, sc*311);
    context.lineTo(sc*1382, sc*316);
    context.lineTo(sc*1391, sc*322);
    context.lineTo(sc*1394, sc*328);
    context.lineTo(sc*1392, sc*334);
    context.lineTo(sc*1382, sc*336);
    context.lineTo(sc*1373, sc*327);
    context.lineTo(sc*1372, sc*327);
    context.lineTo(sc*1354, sc*327);
    context.lineTo(sc*1353, sc*328);
    context.lineTo(sc*1326, sc*327);
    context.lineTo(sc*1324, sc*329);
    context.lineTo(sc*1313, sc*330);
    context.lineTo(sc*1310, sc*326);
    context.lineTo(sc*1302, sc*324);
    context.lineTo(sc*1300, sc*327);
    context.lineTo(sc*1294, sc*328);
    context.lineTo(sc*1292, sc*324);
    context.lineTo(sc*1288, sc*323);
    context.lineTo(sc*1284, sc*318);
    context.lineTo(sc*1288, sc*316);
    context.lineTo(sc*1290, sc*312);
    context.lineTo(sc*1295, sc*310);
    context.lineTo(sc*1299, sc*310);
    context.lineTo(sc*1316, sc*305);
    context.lineTo(sc*1324, sc*308);
    context.lineTo(sc*1331, sc*302);
    context.closePath();
    context.fill();
    context.stroke();
}