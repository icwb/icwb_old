let context;

exports.draw = (ctx) => {
    context = ctx;
    drawDIY(50);
}

function drawDIY(scale = 100){
    var sc = scale / 100;
    
    context.beginPath();
    context.moveTo(sc*800, sc*732);
    context.lineTo(sc*800, sc*731);
    context.lineTo(sc*799, sc*731);
    context.lineTo(sc*796, sc*717);
    context.lineTo(sc*784, sc*715);
    context.lineTo(sc*781, sc*703);
    context.lineTo(sc*773, sc*708);
    context.lineTo(sc*768, sc*708);
    context.lineTo(sc*763, sc*718);
    context.closePath();
    context.fill();
    context.stroke();
    
}