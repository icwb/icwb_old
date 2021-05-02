let context;

exports.draw = (ctx) => {
    context = ctx;
    drawSulbar(50);
}

function drawSulbar(scale = 100){
    var sc = scale / 100;
    
    context.beginPath();
    context.moveTo(sc*1210, sc*388);
    context.lineTo(sc*1212, sc*404);
    context.lineTo(sc*1207, sc*407);
    context.lineTo(sc*1205, sc*411);
    context.lineTo(sc*1214, sc*416);
    context.lineTo(sc*1216, sc*426);
    context.lineTo(sc*1222, sc*431);
    context.lineTo(sc*1223, sc*442);
    context.lineTo(sc*1221, sc*447);
    context.lineTo(sc*1218, sc*447);
    context.lineTo(sc*1213, sc*450);
    context.lineTo(sc*1213, sc*458);
    context.lineTo(sc*1217, sc*460);
    context.lineTo(sc*1220, sc*476);
    context.lineTo(sc*1206, sc*478);
    context.lineTo(sc*1212, sc*496);
    context.lineTo(sc*1202, sc*499);
    context.lineTo(sc*1205, sc*512);
    context.lineTo(sc*1202, sc*512);
    context.lineTo(sc*1196, sc*508);
    context.lineTo(sc*1193, sc*512);
    context.lineTo(sc*1180, sc*515);
    context.lineTo(sc*1171, sc*495);
    context.lineTo(sc*1176, sc*493);
    context.lineTo(sc*1178, sc*484);
    context.lineTo(sc*1172, sc*482);
    context.lineTo(sc*1174, sc*472);
    context.lineTo(sc*1177, sc*474);
    context.lineTo(sc*1189, sc*464);
    context.lineTo(sc*1189, sc*454);
    context.lineTo(sc*1193, sc*441);
    context.lineTo(sc*1198, sc*441);
    context.lineTo(sc*1200, sc*435);
    context.lineTo(sc*1197, sc*426);
    context.lineTo(sc*1198, sc*422);
    context.lineTo(sc*1196, sc*415);
    context.lineTo(sc*1200, sc*412);
    context.lineTo(sc*1197, sc*408);
    context.lineTo(sc*1203, sc*401);
    context.closePath();
    context.fill();
    context.stroke();
}