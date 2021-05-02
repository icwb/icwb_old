let context;

exports.draw = (ctx) => {
    context = ctx;
    drawSulsel(50);
}

function drawSulsel(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*1298, sc*492);
    context.lineTo(sc*1288, sc*484);
    context.lineTo(sc*1280, sc*485);
    context.lineTo(sc*1276, sc*482);
    context.lineTo(sc*1280, sc*479);
    context.lineTo(sc*1278, sc*475);
    context.lineTo(sc*1268, sc*471);
    context.lineTo(sc*1240, sc*488);
    context.lineTo(sc*1242, sc*497);
    context.lineTo(sc*1248, sc*500);
    context.lineTo(sc*1250, sc*524);
    context.lineTo(sc*1246, sc*533);
    context.lineTo(sc*1251, sc*566);
    context.lineTo(sc*1248, sc*575);
    context.lineTo(sc*1244, sc*577);
    context.lineTo(sc*1242, sc*592);
    context.lineTo(sc*1252, sc*612);
    context.lineTo(sc*1248, sc*612);
    context.lineTo(sc*1246, sc*606);
    context.lineTo(sc*1234, sc*611);
    context.lineTo(sc*1226, sc*609);
    context.lineTo(sc*1222, sc*616);
    context.lineTo(sc*1214, sc*616);
    context.lineTo(sc*1212, sc*612);
    context.lineTo(sc*1209, sc*613);
    context.lineTo(sc*1207, sc*610);
    context.lineTo(sc*1204, sc*610);
    context.lineTo(sc*1204, sc*608);
    context.lineTo(sc*1199, sc*602);
    context.lineTo(sc*1202, sc*588);
    context.lineTo(sc*1204, sc*588);
    context.lineTo(sc*1208, sc*579);
    context.lineTo(sc*1205, sc*572);
    context.lineTo(sc*1211, sc*563);
    context.lineTo(sc*1212, sc*539);
    context.lineTo(sc*1204, sc*523);
    context.lineTo(sc*1205, sc*512);
    context.lineTo(sc*1202, sc*499);
    context.lineTo(sc*1212, sc*496);
    context.lineTo(sc*1206, sc*478);
    context.lineTo(sc*1220, sc*476);
    context.lineTo(sc*1217, sc*460);
    context.lineTo(sc*1213, sc*458);
    context.lineTo(sc*1213, sc*450);
    context.lineTo(sc*1218, sc*447);
    context.lineTo(sc*1221, sc*447);
    context.lineTo(sc*1223, sc*442);
    context.lineTo(sc*1233, sc*437);
    context.lineTo(sc*1246, sc*439);
    context.lineTo(sc*1249, sc*436);
    context.lineTo(sc*1264, sc*453);
    context.lineTo(sc*1298, sc*462);
    context.lineTo(sc*1303, sc*467);
    context.lineTo(sc*1312, sc*472);
    context.lineTo(sc*1313, sc*478);
    context.lineTo(sc*1305, sc*488);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1252, sc*617);
    context.lineTo(sc*1249, sc*639);
    context.lineTo(sc*1252, sc*652);
    context.lineTo(sc*1255, sc*644);
    context.lineTo(sc*1256, sc*632);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1266, sc*668);
    context.lineTo(sc*1268, sc*672);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1258, sc*678);
    context.lineTo(sc*1256, sc*681);
    context.lineTo(sc*1260, sc*684);
    context.lineTo(sc*1266, sc*682);
    context.lineTo(sc*1266, sc*680);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1266, sc*691);
    context.lineTo(sc*1277, sc*693);
    context.lineTo(sc*1278, sc*690);
    context.lineTo(sc*1269, sc*688);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1312, sc*697);
    context.lineTo(sc*1315, sc*695);
    context.lineTo(sc*1315, sc*693);
    context.lineTo(sc*1313, sc*693);
    context.lineTo(sc*1310, sc*690);
    context.lineTo(sc*1312, sc*689);
    context.lineTo(sc*1314, sc*690);
    context.closePath();
    context.fill();
    context.stroke();
}