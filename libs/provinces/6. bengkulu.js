let context;

exports.draw = (ctx) => {
    context = ctx;
    drawBengkulu(50);
}

function drawBengkulu(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*340, sc*465);
    context.lineTo(sc*354, sc*456);
    context.lineTo(sc*359, sc*454);
    context.lineTo(sc*371, sc*472);
    context.lineTo(sc*388, sc*480);
    context.lineTo(sc*397, sc*488);
    context.lineTo(sc*394, sc*490);
    context.lineTo(sc*398, sc*494);
    context.lineTo(sc*402, sc*492);
    context.lineTo(sc*409, sc*497);
    context.lineTo(sc*407, sc*502);
    context.lineTo(sc*414, sc*507);
    context.lineTo(sc*422, sc*504);
    context.lineTo(sc*423, sc*505);
    context.lineTo(sc*433, sc*509);
    context.lineTo(sc*433, sc*516);
    context.lineTo(sc*426, sc*518);
    context.lineTo(sc*426, sc*520);
    context.lineTo(sc*416, sc*528);
    context.lineTo(sc*424, sc*536);
    context.lineTo(sc*428, sc*536);
    context.lineTo(sc*429, sc*537);
    context.lineTo(sc*438, sc*537);
    context.lineTo(sc*442, sc*548);
    context.lineTo(sc*461, sc*555);
    context.lineTo(sc*468, sc*573);
    context.lineTo(sc*460, sc*578);
    context.lineTo(sc*456, sc*576);
    context.lineTo(sc*451, sc*576);
    context.lineTo(sc*451, sc*574);
    context.lineTo(sc*448, sc*574);
    context.lineTo(sc*448, sc*572);
    context.lineTo(sc*428, sc*560);
    context.lineTo(sc*399, sc*536);
    context.lineTo(sc*399, sc*531);
    context.lineTo(sc*396, sc*520);
    context.lineTo(sc*366, sc*500);
    context.lineTo(sc*352, sc*476);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*390, sc*599);
    context.lineTo(sc*392, sc*596);
    context.lineTo(sc*404, sc*602);
    context.lineTo(sc*402, sc*606);
    context.lineTo(sc*399, sc*606);
    context.closePath();
    context.fill();
    context.stroke();
}