/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: NOV 25, 2025; 9:33AM
 *  REPOSITORY: https://github.com/NelMatrix743/color_palette_generator.git
 */

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