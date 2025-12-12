/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: NOV 25, 2025; 9:33AM
 *  REPOSITORY: https://github.com/NelMatrix743/color_palette_generator.git
 */


// map color holders dom nodes to js variables
let colorHolder0 = document.getElementById("clh-0");
let colorHolder1 = document.getElementById("clh-1");
let colorHolder2 = document.getElementById("clh-2");
let colorHolder3 = document.getElementById("clh-3");
let colorHolder4 = document.getElementById("clh-4");

// map color hex value nodes to js variables
let hexValue0 = document.getElementById("hxv-0");
let hexValue1 = document.getElementById("hxv-1");
let hexValue2 = document.getElementById("hxv-2");
let hexValue3 = document.getElementById("hxv-3");
let hexValue4 = document.getElementById("hxv-4");

// map copy buttons
let copyBtn = document.getElementById("copy-btn");

// map palette generation button
let generateBtn = document.getElementById("gen-btn");


// implement required functions
function generateColorPalette(){
    const colors = [];
    for(let color = 0; color <= 4; color++){
        colors.push(generateRandColor());
    }
}

function generateRandColor(){
    const hexChars = "0123456789ABCDEF";
    let result = '#';
    for(let char = 0; char <= 5; char++){
        result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
}