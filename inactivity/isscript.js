let shouldBeRunning = false;

function run() {
    let TF = false; 
    let didr = document.getElementById("war2");
    let btnname = document.getElementById("run-btn")

    if (TF === false && didr.textContent === "off") {
        didr.textContent = "on";
        TF = true;
        shouldBeRunning = true;
        btnname.textContent = "Stop"
    } else if (TF === true && didr.textContent === "on") {
        didr.textContent = "off";
        TF = false;
        shouldBeRunning = false;
        btnname = "Start"
    } else if (TF !== true || TF !== false || didr.textContent !== "on" || didr.textContent !== "off") {
        didr.textContent = "There seems to have been an error in the JavaScript file, please reload this page."
        btnname = "Error"
    }

     if (shouldBeRunning === true) {
        clickInterval = setInterval(() => {
            const targetButton = document.getElementById("run-btn");
            if (targetButton) {
                targetButton.click();
            }
        }, 240000);
    } else if (shouldBeRunning === false) {
        clearInterval(clickInterval);
    }
};