/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: NOV 25, 2025; 9:33AM
 *  REPOSITORY: https://github.com/NelMatrix743/color_palette_generator.git
 */

// map copy buttons
let copyBtns = document.querySelectorAll(".copy-btn");

// map palette generation button
let generateBtn = document.getElementById("gen-btn");


// implement required functions
function generateColorPalette(){
    const colors = [];
    for(let color = 0; color <= 4; color++){
        colors.push(generateRandColor());
    }
    updateColorBoxes(colors);
}

function generateRandColor(){
    const hexChars = "0123456789ABCDEF";
    let result = '#';
    for(let char = 0; char <= 5; char++){
        result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
}

function updateColorBoxes(colors){
    let colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((colorBox, index) => {
        let colorHolder = colorBox.querySelector(".color-holder");
        let hexValue = colorBox.querySelector(".hex-value");

        colorHolder.style.backgroundColor = colors[index];
        hexValue.textContent = colors[index];
    });
}

function clipboardSuccessfullyCopied(copyButton){
    copyButton.classList.remove("far", "fa-copy");
    copyButton.classList.add("fas", "fa-check");
    copyButton.style.color = "#48bb78";

    setTimeout(() => {
        copyButton.classList.remove("fas", "fa-check");
        copyButton.classList.add("far", "fa-copy");
        copyButton.style.color = "#64748b";
    }, 1000);
}


// add event listeners
generateBtn.addEventListener("click", () => {
    generateColorPalette();
});

copyBtns.forEach((copyButton) => {
    copyButton.addEventListener("click", (e) => {
        let colorInfo = e.currentTarget.closest(".color-info");
        let hexValue = colorInfo.querySelector(".hex-value")
            .textContent.trim();

        // write to clipboard
        navigator.clipboard.writeText(hexValue)
            .then(
                () => clipboardSuccessfullyCopied(copyButton)
            )
            .catch((error) => {
                 alert("color could not be copied to clipboard\n" + error);
                }
            );
        }
    );
});