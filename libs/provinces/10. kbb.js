let context;

exports.draw = (ctx) => {
    context = ctx;
    drawKBB(50);
}

function drawKBB(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.moveTo(sc*533, sc*446);
    context.lineTo(sc*538, sc*446);
    context.lineTo(sc*540, sc*448);
    context.lineTo(sc*548, sc*448);
    context.lineTo(sc*552, sc*446);
    context.lineTo(sc*555, sc*449);
    context.lineTo(sc*564, sc*450);
    context.lineTo(sc*564, sc*462);
    context.lineTo(sc*570, sc*464);
    context.lineTo(sc*569, sc*472);
    context.lineTo(sc*572, sc*482);
    context.lineTo(sc*588, sc*488);
    context.lineTo(sc*594, sc*488);
    context.lineTo(sc*597, sc*494);
    context.lineTo(sc*602, sc*493);
    context.lineTo(sc*607, sc*493);
    context.lineTo(sc*608, sc*488);
    context.lineTo(sc*610, sc*485);
    context.lineTo(sc*616, sc*487);
    context.lineTo(sc*614, sc*491);
    context.lineTo(sc*601, sc*487);
    context.lineTo(sc*606, sc*474);
    context.lineTo(sc*612, sc*470);
    context.lineTo(sc*590, sc*466);
    context.lineTo(sc*580, sc*444);
    context.lineTo(sc*580, sc*436);
    context.lineTo(sc*574, sc*427);
    context.lineTo(sc*574, sc*424);
    context.lineTo(sc*569, sc*419);
    context.lineTo(sc*560, sc*422);
    context.lineTo(sc*564, sc*433);
    context.lineTo(sc*556, sc*430);
    context.lineTo(sc*558, sc*427);
    context.lineTo(sc*555, sc*422);
    context.lineTo(sc*542, sc*428);
    context.lineTo(sc*545, sc*434);
    context.lineTo(sc*534, sc*440);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*636, sc*484);
    context.lineTo(sc*641, sc*488);
    context.lineTo(sc*644, sc*482);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(sc*651, sc*468);
    context.lineTo(sc*650, sc*478);
    context.lineTo(sc*648, sc*494);
    context.lineTo(sc*650, sc*496);
    context.lineTo(sc*648, sc*498);
    context.lineTo(sc*648, sc*501);
    context.lineTo(sc*652, sc*500);
    context.lineTo(sc*658, sc*497);
    context.lineTo(sc*659, sc*492);
    context.lineTo(sc*661, sc*492);
    context.lineTo(sc*665, sc*497);
    context.lineTo(sc*666, sc*501);
    context.lineTo(sc*669, sc*501);
    context.lineTo(sc*670, sc*498);
    context.lineTo(sc*676, sc*496);
    context.lineTo(sc*676, sc*489);
    context.lineTo(sc*680, sc*484);
    context.lineTo(sc*670, sc*470);
    context.lineTo(sc*668, sc*472);
    context.lineTo(sc*666, sc*469);
    context.closePath();
    context.fill();
    context.stroke();
}