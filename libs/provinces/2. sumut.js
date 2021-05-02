let context;

exports.draw = (ctx) => {
    context = ctx;
    drawSumut(50);
}

function drawSumut(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*203, sc*248);
    context.lineTo(sc*201, sc*221);
    context.lineTo(sc*194, sc*214);
    context.lineTo(sc*196, sc*194);
    context.lineTo(sc*188, sc*178);
    context.lineTo(sc*199, sc*163);
    context.lineTo(sc*200, sc*152);
    context.lineTo(sc*210, sc*148);
    context.lineTo(sc*231, sc*168);
    context.lineTo(sc*232, sc*174);
    context.lineTo(sc*280, sc*202);
    context.lineTo(sc*290, sc*212);
    context.lineTo(sc*292, sc*221);
    context.lineTo(sc*296, sc*224);
    context.lineTo(sc*301, sc*223);
    context.lineTo(sc*307, sc*233); // CHECK
    context.lineTo(sc*306, sc*262); // CHECK
    context.lineTo(sc*311, sc*276); // CHECK
    context.lineTo(sc*294, sc*284); // CHECK
    context.lineTo(sc*303, sc*296); // CHECK
    context.lineTo(sc*299, sc*314); // CHECK
    context.lineTo(sc*278, sc*310); // CHECK
    context.lineTo(sc*288, sc*326); // CHECK
    context.lineTo(sc*271, sc*324); // CHECK
    context.lineTo(sc*252, sc*337); // CHECK
    context.lineTo(sc*232, sc*278);
    context.lineTo(sc*236, sc*274);
    context.lineTo(sc*232, sc*266);
    context.lineTo(sc*229, sc*269);
    context.lineTo(sc*224, sc*261);
    context.lineTo(sc*213, sc*255);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*152, sc*283);
    context.lineTo(sc*160, sc*283);
    context.lineTo(sc*165, sc*278);
    context.lineTo(sc*176, sc*283);
    context.lineTo(sc*182, sc*294);
    context.lineTo(sc*189, sc*297);
    context.lineTo(sc*194, sc*303);
    context.lineTo(sc*192, sc*322);
    context.lineTo(sc*182, sc*322);
    context.lineTo(sc*179, sc*312);
    context.lineTo(sc*169, sc*305);
    context.lineTo(sc*168, sc*301);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*212, sc*351);
    context.lineTo(sc*217, sc*362);
    context.lineTo(sc*211, sc*374);
    context.lineTo(sc*216, sc*378);
    context.lineTo(sc*220, sc*376);
    context.lineTo(sc*224, sc*363);
    context.lineTo(sc*217, sc*350);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*223, sc*346);
    context.lineTo(sc*237, sc*347);
    context.lineTo(sc*236, sc*343);
    context.lineTo(sc*224, sc*342);
    context.closePath();
    context.fill();
    context.stroke();
}