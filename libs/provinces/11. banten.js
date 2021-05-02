let context;

exports.draw = (ctx) => {
    context = ctx;
    drawBanten(50);
}

function drawBanten(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*536, sc*666);
    context.lineTo(sc*539, sc*670);
    context.lineTo(sc*540, sc*668);
    context.lineTo(sc*548, sc*670);
    context.lineTo(sc*571, sc*668);
    context.lineTo(sc*575, sc*669);
    context.lineTo(sc*580, sc*674);
    context.lineTo(sc*582, sc*674);
    context.lineTo(sc*587, sc*677);
    context.lineTo(sc*592, sc*676);
    context.lineTo(sc*592, sc*671);
    context.lineTo(sc*597, sc*666);
    context.lineTo(sc*594, sc*666);
    context.lineTo(sc*592, sc*653);
    context.lineTo(sc*593, sc*650);
    context.lineTo(sc*593, sc*646);
    context.lineTo(sc*596, sc*647);
    context.lineTo(sc*596, sc*646);
    context.lineTo(sc*609, sc*648);
    context.lineTo(sc*609, sc*645);
    context.lineTo(sc*605, sc*637);
    context.lineTo(sc*606, sc*633);
    context.lineTo(sc*598, sc*630);
    context.lineTo(sc*595, sc*631);
    context.lineTo(sc*586, sc*628);
    context.lineTo(sc*581, sc*630);
    context.lineTo(sc*578, sc*629);
    context.lineTo(sc*578, sc*625);
    context.lineTo(sc*574, sc*624);
    context.lineTo(sc*572, sc*627);
    context.lineTo(sc*566, sc*635);
    context.lineTo(sc*564, sc*653);
    context.lineTo(sc*560, sc*654);
    context.lineTo(sc*556, sc*651);
    context.lineTo(sc*556, sc*660);
    context.lineTo(sc*550, sc*666);
    context.lineTo(sc*548, sc*666);
    context.lineTo(sc*544, sc*661);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*534, sc*662);
    context.lineTo(sc*538, sc*659);
    context.lineTo(sc*538, sc*654);
    context.lineTo(sc*531, sc*659);
    context.lineTo(sc*534, sc*658);
    context.closePath();
    context.fill();
    context.stroke();
}