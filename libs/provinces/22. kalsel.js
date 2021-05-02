let context;

exports.draw = (ctx) => {
    context = ctx;
    drawKalsel(50);
}

function drawKalsel(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*970, sc*512);
    context.lineTo(sc*971, sc*508);
    context.lineTo(sc*974, sc*506);
    context.lineTo(sc*972, sc*514);
    context.lineTo(sc*977, sc*521);
    context.lineTo(sc*977, sc*545);
    context.lineTo(sc*980, sc*545);
    context.lineTo(sc*1036, sc*518);
    context.lineTo(sc*1040, sc*518);
    context.lineTo(sc*1042, sc*514);
    context.lineTo(sc*1042, sc*512);
    context.lineTo(sc*1048, sc*500);
    context.lineTo(sc*1050, sc*500);
    context.lineTo(sc*1049, sc*498);
    context.lineTo(sc*1054, sc*495);
    context.lineTo(sc*1048, sc*489);
    context.lineTo(sc*1048, sc*481);
    context.lineTo(sc*1052, sc*490);
    context.lineTo(sc*1059, sc*484);
    context.lineTo(sc*1059, sc*474);
    context.lineTo(sc*1060, sc*470);
    context.lineTo(sc*1057, sc*471);
    context.lineTo(sc*1056, sc*468);
    context.lineTo(sc*1063, sc*466);
    context.lineTo(sc*1064, sc*468);
    context.lineTo(sc*1067, sc*468);
    context.lineTo(sc*1068, sc*460);
    context.lineTo(sc*1041, sc*456);
    context.lineTo(sc*1036, sc*460);
    context.lineTo(sc*1032, sc*451);
    context.lineTo(sc*1034, sc*444);
    context.lineTo(sc*1030, sc*444);
    context.lineTo(sc*1030, sc*435);
    context.lineTo(sc*1024, sc*420);
    context.lineTo(sc*1021, sc*421);
    context.lineTo(sc*1027, sc*415);
    context.lineTo(sc*1026, sc*413);
    context.lineTo(sc*1017, sc*416);
    context.lineTo(sc*1010, sc*444);
    context.lineTo(sc*989, sc*457);
    context.lineTo(sc*990, sc*464);
    context.lineTo(sc*978, sc*483);
    context.lineTo(sc*972, sc*484);
    context.lineTo(sc*963, sc*510);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1054, sc*500);
    context.lineTo(sc*1048, sc*503);
    context.lineTo(sc*1042, sc*518);
    context.lineTo(sc*1042, sc*526);
    context.lineTo(sc*1045, sc*527);
    context.lineTo(sc*1046, sc*533);
    context.lineTo(sc*1043, sc*538);
    context.lineTo(sc*1046, sc*539);
    context.lineTo(sc*1056, sc*532);
    context.lineTo(sc*1056, sc*513);
    context.lineTo(sc*1057, sc*512);
    context.lineTo(sc*1062, sc*506);
    context.lineTo(sc*1062, sc*509);
    context.lineTo(sc*1060, sc*519);
    context.lineTo(sc*1057, sc*514);
    context.lineTo(sc*1057, sc*512);
    context.lineTo(sc*1054, sc*509);
    context.closePath();
    context.fill();
    context.stroke();
}