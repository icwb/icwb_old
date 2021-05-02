let context;

exports.draw = (ctx) => {
    context = ctx;
    drawJabar(50);
}

function drawJabar(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.lineTo(sc*620, sc*634);
    context.lineTo(sc*617, sc*647);
    context.lineTo(sc*609, sc*645);
    context.lineTo(sc*609, sc*648);
    context.lineTo(sc*596, sc*646);
    context.lineTo(sc*596, sc*647);
    context.lineTo(sc*593, sc*646);
    context.lineTo(sc*593, sc*650);
    context.lineTo(sc*592, sc*653);
    context.lineTo(sc*594, sc*666);
    context.lineTo(sc*597, sc*666);
    context.lineTo(sc*592, sc*671);
    context.lineTo(sc*592, sc*676);
    context.lineTo(sc*598, sc*675);
    context.lineTo(sc*598, sc*679);
    context.lineTo(sc*594, sc*685);
    context.lineTo(sc*590, sc*686);
    context.lineTo(sc*592, sc*694);
    context.lineTo(sc*595, sc*694);
    context.lineTo(sc*597, sc*697);
    context.lineTo(sc*628, sc*700);
    context.lineTo(sc*638, sc*700);
    context.lineTo(sc*642, sc*702);
    context.lineTo(sc*651, sc*706);
    context.lineTo(sc*651, sc*708);
    context.lineTo(sc*659, sc*708);
    context.lineTo(sc*659, sc*713);
    context.lineTo(sc*664, sc*712);
    context.lineTo(sc*690, sc*715);
    context.lineTo(sc*692, sc*710);
    context.lineTo(sc*696, sc*710);
    context.lineTo(sc*698, sc*712);
    context.lineTo(sc*699, sc*708);
    context.lineTo(sc*704, sc*708);
    context.lineTo(sc*702, sc*706);
    context.lineTo(sc*700, sc*694);
    context.lineTo(sc*692, sc*690);
    context.lineTo(sc*695, sc*683);
    context.lineTo(sc*699, sc*683);
    context.lineTo(sc*703, sc*680);
    context.lineTo(sc*704, sc*674);
    context.lineTo(sc*708, sc*668);
    context.lineTo(sc*704, sc*666);
    context.lineTo(sc*702, sc*668);
    context.lineTo(sc*696, sc*666);
    context.lineTo(sc*692, sc*653);
    context.lineTo(sc*684, sc*646);
    context.lineTo(sc*684, sc*642);
    context.lineTo(sc*676, sc*641);
    context.lineTo(sc*676, sc*642);
    context.lineTo(sc*672, sc*646);
    context.lineTo(sc*663, sc*642);
    context.lineTo(sc*662, sc*640);
    context.lineTo(sc*658, sc*640);
    context.lineTo(sc*650, sc*641);
    context.lineTo(sc*648, sc*639);
    context.lineTo(sc*641, sc*636);
    context.lineTo(sc*635, sc*629);
    context.lineTo(sc*626, sc*629);
    context.lineTo(sc*622, sc*626);
    context.closePath();
    context.fill();
    context.stroke();
}