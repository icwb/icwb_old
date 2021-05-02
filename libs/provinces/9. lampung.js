let context;

exports.draw = (ctx) => {
    context = ctx;
    drawLampung(50);
}

function drawLampung(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*565, sc*543);
    context.lineTo(sc*560, sc*544);
    context.lineTo(sc*542, sc*526);
    context.lineTo(sc*539, sc*531);
    context.lineTo(sc*532, sc*533);
    context.lineTo(sc*529, sc*542);
    context.lineTo(sc*494, sc*557);
    context.lineTo(sc*494, sc*566);
    context.lineTo(sc*491, sc*569);
    context.lineTo(sc*494, sc*575);
    context.lineTo(sc*494, sc*578);
    context.lineTo(sc*491, sc*578);
    context.lineTo(sc*472, sc*579);
    context.lineTo(sc*472, sc*576);
    context.lineTo(sc*468, sc*574);
    context.lineTo(sc*460, sc*578);
    context.lineTo(sc*462, sc*582);
    context.lineTo(sc*467, sc*582);
    context.lineTo(sc*466, sc*584);
    context.lineTo(sc*468, sc*584);
    context.lineTo(sc*476, sc*589);
    context.lineTo(sc*474, sc*592);
    context.lineTo(sc*479, sc*594);
    context.lineTo(sc*478, sc*598);
    context.lineTo(sc*485, sc*605);
    context.lineTo(sc*494, sc*611);
    context.lineTo(sc*493, sc*614);
    context.lineTo(sc*506, sc*624);
    context.lineTo(sc*506, sc*626);
    context.lineTo(sc*512, sc*626);
    context.lineTo(sc*512, sc*622);
    context.lineTo(sc*504, sc*608);
    context.lineTo(sc*512, sc*608);
    context.lineTo(sc*516, sc*612);
    context.lineTo(sc*518, sc*612);
    context.lineTo(sc*530, sc*618);
    context.lineTo(sc*533, sc*620);
    context.lineTo(sc*536, sc*619);
    context.lineTo(sc*534, sc*617);
    context.lineTo(sc*536, sc*615);
    context.lineTo(sc*535, sc*610);
    context.lineTo(sc*538, sc*610);
    context.lineTo(sc*538, sc*604);
    context.lineTo(sc*550, sc*614);
    context.lineTo(sc*552, sc*614);
    context.lineTo(sc*554, sc*620);
    context.lineTo(sc*558, sc*622);
    context.lineTo(sc*561, sc*625);
    context.lineTo(sc*566, sc*614);
    context.lineTo(sc*566, sc*600);
    context.lineTo(sc*566, sc*586);
    context.lineTo(sc*569, sc*578);
    context.lineTo(sc*567, sc*574);
    context.lineTo(sc*568, sc*558);
    context.lineTo(sc*564, sc*548);
    context.closePath();
    context.fill();
    context.stroke();
}