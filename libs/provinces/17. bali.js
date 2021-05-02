let context;

exports.draw = (ctx) => {
    context = ctx;
    drawBali(50);
}

function drawBali(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*969, sc*728);
    context.lineTo(sc*969, sc*732);
    context.lineTo(sc*977, sc*743);
    context.lineTo(sc*986, sc*743);
    context.lineTo(sc*1004, sc*759);
    context.lineTo(sc*1006, sc*763);
    context.lineTo(sc*999, sc*764);
    context.lineTo(sc*999, sc*762);
    context.lineTo(sc*1004, sc*759);
    context.lineTo(sc*1006, sc*758);
    context.lineTo(sc*1009, sc*753);
    context.lineTo(sc*1020, sc*749);
    context.lineTo(sc*1028, sc*742);
    context.lineTo(sc*1028, sc*740);
    context.lineTo(sc*1024, sc*738);
    context.lineTo(sc*1020, sc*732);
    context.lineTo(sc*1006, sc*726);
    context.lineTo(sc*1002, sc*727);
    context.lineTo(sc*996, sc*732);
    context.lineTo(sc*987, sc*732);
    context.lineTo(sc*982, sc*731);
    context.lineTo(sc*975, sc*729);
    context.lineTo(sc*974, sc*730);
    context.lineTo(sc*972, sc*728);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*1016, sc*759);
    context.lineTo(sc*1021, sc*762);
    context.lineTo(sc*1024, sc*760);
    context.lineTo(sc*1022, sc*755);
    context.lineTo(sc*1020, sc*755);
    context.closePath();
    context.fill();
    context.stroke();
}