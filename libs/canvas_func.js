const {createCanvas} = require('canvas');
const canvas = createCanvas(1200, 400);
const context = canvas.getContext('2d');

const provinces = require('./provinces/provinces.js');

exports.returnDataUrl = function(){
    
    provinces.aceh.draw(context);
    provinces.jabar.draw(context);

    return '<img src="' + canvas.toDataURL() + '" />';
}