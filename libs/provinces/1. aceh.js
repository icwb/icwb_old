let context;

exports.draw = (ctx) => {
    context = ctx;
    drawAceh(50);
}

function drawAceh(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*67, sc*92);
    context.lineTo(sc*78, sc*126);
    context.lineTo(sc*125, sc*174);
    context.lineTo(sc*146, sc*178);
    context.lineTo(sc*166, sc*210);
    context.lineTo(sc*179, sc*218);
    context.lineTo(sc*182, sc*240);
    context.lineTo(sc*203, sc*248); // CHECK
    context.lineTo(sc*201, sc*221); // CHECK
    context.lineTo(sc*194, sc*214); // CHECK
    context.lineTo(sc*196, sc*194); // CHECK
    context.lineTo(sc*188, sc*178); // CHECK
    context.lineTo(sc*199, sc*163); // CHECK
    context.lineTo(sc*200, sc*152); // CHECK
    context.lineTo(sc*210, sc*148); // CHECK
    context.lineTo(sc*209, sc*140);
    context.lineTo(sc*196, sc*135);
    context.lineTo(sc*193, sc*120);
    context.lineTo(sc*176, sc*106);
    context.lineTo(sc*160, sc*110);
    context.lineTo(sc*145, sc*103);
    context.lineTo(sc*114, sc*103);
    context.lineTo(sc*98, sc*92);
    context.lineTo(sc*77, sc*86);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*90, sc*220);
    context.lineTo(sc*118, sc*238);
    context.lineTo(sc*126, sc*238);
    context.lineTo(sc*120, sc*228);
    context.lineTo(sc*108, sc*225);
    context.lineTo(sc*109, sc*222);
    context.lineTo(sc*94, sc*213);
    context.closePath();
    context.fill();
    context.stroke();


    context.beginPath();
    context.moveTo(sc*132, sc*248);
    context.lineTo(sc*134, sc*254);
    context.lineTo(sc*136, sc*251);
    context.closePath();
    context.fill();
    context.stroke();


    context.beginPath();
    context.moveTo(sc*156, sc*248);
    context.lineTo(sc*165, sc*254);
    context.lineTo(sc*165, sc*246);
    context.closePath();
    context.fill();
    context.stroke();


    context.beginPath();
    context.moveTo(sc*153, sc*256);
    context.lineTo(sc*157, sc*254);
    context.lineTo(sc*157, sc*251);
    context.lineTo(sc*154, sc*252);
    context.closePath();
    context.fill();
    context.stroke();
}