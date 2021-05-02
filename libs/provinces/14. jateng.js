let context;

exports.draw = (ctx) => {
    context = ctx;
    drawJateng(50);
}

function drawJateng(scale = 100){
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*704, sc*708);
    context.lineTo(sc*702, sc*706);
    context.lineTo(sc*700, sc*694);
    context.lineTo(sc*692, sc*690);
    context.lineTo(sc*695, sc*683);
    context.lineTo(sc*699, sc*683);
    context.lineTo(sc*703, sc*680);
    context.lineTo(sc*704, sc*674);
    context.lineTo(sc*708, sc*668);
    context.lineTo(sc*713, sc*670);
    context.lineTo(sc*715, sc*667);
    context.lineTo(sc*719, sc*671);
    context.lineTo(sc*733, sc*672);
    context.lineTo(sc*736, sc*668);
    context.lineTo(sc*746, sc*670);
    context.lineTo(sc*754, sc*674);
    context.lineTo(sc*768, sc*670);
    context.lineTo(sc*777, sc*676);
    context.lineTo(sc*782, sc*675);
    context.lineTo(sc*792, sc*654);
    context.lineTo(sc*803, sc*649);
    context.lineTo(sc*810, sc*652);
    context.lineTo(sc*814, sc*662);
    context.lineTo(sc*828, sc*664);
    context.lineTo(sc*831, sc*660);
    context.lineTo(sc*840, sc*666);
    context.lineTo(sc*836, sc*684);
    context.lineTo(sc*828, sc*690);
    context.lineTo(sc*818, sc*689);
    context.lineTo(sc*816, sc*709);
    context.lineTo(sc*822, sc*713);
    context.lineTo(sc*821, sc*720);
    context.lineTo(sc*806, sc*730);
    context.lineTo(sc*806, sc*734);
    context.lineTo(sc*800, sc*732);
    context.lineTo(sc*800, sc*731);
    context.lineTo(sc*799, sc*731);
    context.lineTo(sc*796, sc*717);
    context.lineTo(sc*784, sc*715);
    context.lineTo(sc*781, sc*703);
    context.lineTo(sc*773, sc*708);
    context.lineTo(sc*768, sc*708);
    context.lineTo(sc*763, sc*718);
    context.lineTo(sc*733, sc*712);
    context.lineTo(sc*732, sc*712);
    context.lineTo(sc*718, sc*708);
    context.lineTo(sc*716, sc*710);
    context.lineTo(sc*709, sc*709);
    context.lineTo(sc*708, sc*706);
    context.closePath();
    context.fill();
    context.stroke();
}