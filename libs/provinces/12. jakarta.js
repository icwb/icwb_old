let context;

exports.draw = (ctx) => {
    context = ctx;
    drawJakarta(50);
}

function drawJakarta(scale) {
    var sc = scale / 100;
    context.beginPath();

    context.moveTo(sc*609, sc*645);
    context.lineTo(sc*605, sc*637);
    context.lineTo(sc*606, sc*633);
    context.lineTo(sc*608, sc*635);
    context.lineTo(sc*620, sc*634);
    context.lineTo(sc*617, sc*647);

    context.closePath();
    context.fill();
    context.stroke();
}