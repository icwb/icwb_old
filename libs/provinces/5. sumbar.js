let context;

exports.draw = (ctx) => {
    context = ctx;
    drawSumbar(50);
}

function drawSumbar(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.lineTo(sc*252, sc*337);
    context.lineTo(sc*271, sc*324);
    context.lineTo(sc*288, sc*326);
    context.lineTo(sc*278, sc*310);
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
    context.lineTo(sc*376, sc*403);
    context.lineTo(sc*378, sc*404);
    context.lineTo(sc*374, sc*410);
    context.lineTo(sc*370, sc*410);
    context.lineTo(sc*370, sc*420);
    context.lineTo(sc*362, sc*430);
    context.lineTo(sc*345, sc*431);
    context.lineTo(sc*346, sc*440);
    context.lineTo(sc*354, sc*456);
    context.lineTo(sc*340, sc*465);
    context.lineTo(sc*330, sc*450);
    context.lineTo(sc*334, sc*445);
    context.lineTo(sc*332, sc*438);
    context.lineTo(sc*320, sc*419);
    context.lineTo(sc*319, sc*417);
    context.lineTo(sc*318, sc*412);
    context.lineTo(sc*312, sc*410);
    context.lineTo(sc*313, sc*406);
    context.lineTo(sc*309, sc*404);
    context.lineTo(sc*309, sc*394);
    context.lineTo(sc*292, sc*372);
    context.lineTo(sc*284, sc*365);
    context.lineTo(sc*280, sc*358);
    context.lineTo(sc*280, sc*354);
    context.lineTo(sc*272, sc*344);
    context.lineTo(sc*262, sc*342);
    context.lineTo(sc*259, sc*339);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*229, sc*394);
    context.lineTo(sc*233, sc*394);
    context.lineTo(sc*239, sc*391);
    context.lineTo(sc*242, sc*395);
    context.lineTo(sc*241, sc*399);
    context.lineTo(sc*255, sc*422);
    context.lineTo(sc*258, sc*431);
    context.lineTo(sc*252, sc*434);
    context.lineTo(sc*240, sc*430);
    context.lineTo(sc*236, sc*426);
    context.lineTo(sc*236, sc*422);
    context.lineTo(sc*226, sc*406);
    context.lineTo(sc*228, sc*400);
    context.lineTo(sc*228, sc*394);
    context.lineTo(sc*234, sc*394);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*272, sc*443);
    context.lineTo(sc*270, sc*448);
    context.lineTo(sc*278, sc*458);
    context.lineTo(sc*285, sc*460);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*302, sc*478);
    context.lineTo(sc*292, sc*480);
    context.lineTo(sc*291, sc*466);
    context.lineTo(sc*302, sc*478);
    context.lineTo(sc*314, sc*490);
    context.lineTo(sc*314, sc*495);
    context.lineTo(sc*316, sc*499);
    context.lineTo(sc*313, sc*495);
    context.lineTo(sc*310, sc*496);
    context.lineTo(sc*314, sc*506);
    context.lineTo(sc*307, sc*499);
    context.lineTo(sc*307, sc*495);
    context.lineTo(sc*302, sc*492);
    context.lineTo(sc*300, sc*481);
    context.closePath();
    context.fill();
    context.stroke();
}