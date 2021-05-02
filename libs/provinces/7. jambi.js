let context;

exports.draw = (ctx) => {
    context = ctx;
    drawJambi(50);
}

function drawJambi(scale) {
    var sc = scale / 100;

    context.beginPath();
    context.lineTo(sc*354, sc*456);
    context.lineTo(sc*359, sc*454);
    context.lineTo(sc*371, sc*472);
    context.lineTo(sc*388, sc*480);
    context.lineTo(sc*396, sc*473);
    context.lineTo(sc*404, sc*478);
    context.lineTo(sc*414, sc*478);
    context.lineTo(sc*422, sc*471);
    context.lineTo(sc*426, sc*464);
    context.lineTo(sc*424, sc*459);
    context.lineTo(sc*438, sc*462);
    context.lineTo(sc*442, sc*462);
    context.lineTo(sc*440, sc*458);
    context.lineTo(sc*443, sc*452);
    context.lineTo(sc*446, sc*456);
    context.lineTo(sc*454, sc*461);
    context.lineTo(sc*454, sc*455);
    context.lineTo(sc*458, sc*453);
    context.lineTo(sc*456, sc*450);
    context.lineTo(sc*458, sc*442);
    context.lineTo(sc*474, sc*432);
    context.lineTo(sc*486, sc*436);
    context.lineTo(sc*494, sc*434);
    context.lineTo(sc*497, sc*429);
    context.lineTo(sc*504, sc*431);
    context.lineTo(sc*500, sc*422);
    context.lineTo(sc*500, sc*411);
    context.lineTo(sc*498, sc*408);
    context.lineTo(sc*497, sc*398);
    context.lineTo(sc*488, sc*400);
    context.lineTo(sc*477, sc*395);
    context.lineTo(sc*470, sc*399);
    context.lineTo(sc*469, sc*397);
    context.lineTo(sc*454, sc*386);
    context.lineTo(sc*425, sc*386);
    context.lineTo(sc*412, sc*400);
    context.lineTo(sc*406, sc*400);
    context.lineTo(sc*397, sc*390);
    context.lineTo(sc*390, sc*390);
    context.lineTo(sc*384, sc*390);
    context.lineTo(sc*380, sc*396);
    context.lineTo(sc*374, sc*398);
    context.lineTo(sc*376, sc*403);
    context.lineTo(sc*378, sc*404);
    context.lineTo(sc*374, sc*410);
    context.lineTo(sc*370, sc*410);
    context.lineTo(sc*370, sc*420);
    context.lineTo(sc*362, sc*430);
    context.lineTo(sc*345, sc*431);
    context.lineTo(sc*346, sc*440);
    context.lineTo(sc*354, sc*456);
    context.fill();
    context.stroke();
}