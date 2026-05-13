let shouldBeRunning = False

function start() {
    let TF = 0;
    let didr = document.getElementById("running");

    if (TF === 0 && didr.textContent === "off") {
        TF = 1;
        didr.textContent = "on";
    } else if (TF === 1 && didr.textContent === "on") {
        TF = 0;
        didr.textContent = "off"
    } else if (TF !== 1 || TF !== 0 || didr.textContent !== "off" || didr.textContent !== "on" ) {
        didr.textContent = "Error occured in JavaScript page, please reload this page."
    };
    
    if (TF === 1) {
        shouldBeRunning = True 
    } else {
        shouldBeRunning = False
    };
}; 

