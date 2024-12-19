document.addEventListener("DOMContentLoaded", function () {
    const operationTextBox = document.getElementById("operationTextBox");
    const resultBox = document.querySelector(".resultBox");
    const buttons = document.querySelectorAll(".btnStyle");
    const btnForBack = document.getElementById("btnForBack");
    const btnForEqual = document.getElementById("btnForEqual");
    const btnForC = document.getElementById("btnForC");
    let currentOperation = "";

    const updateOperationTextBox = () => {
        operationTextBox.innerText = currentOperation;
    };

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const buttonValue = e.target.innerText;
            if (buttonValue === "=") return;
            if (buttonValue === "C") return;
            if (buttonValue === "<") return;
            currentOperation += buttonValue;
            updateOperationTextBox();
        });
    });

    btnForC.addEventListener("click", () => {
        currentOperation = "";
        updateOperationTextBox();
        resultBox.innerText = "";
    });

    btnForEqual.addEventListener("click", () => {
        try {
            const sanitizedOperation = currentOperation
                .replace(/÷/g, "/")
                .replace(/x/g, "*");
            let result = eval(sanitizedOperation);
            result = Math.round(result * 100) / 100;
            resultBox.innerText = result;
        } catch (error) {
            resultBox.innerText = "Error";
        }
    });

    btnForBack.addEventListener("click", () => {
        currentOperation = currentOperation.slice(0, -1);
        updateOperationTextBox();
    });
});




const head = document.getElementById("statusBarHead");
const toggleCheckbox = document.getElementById("toggle");
const root = document.documentElement;
root.style.setProperty("--light-mode", "var(--light-background)");
toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
        root.style.setProperty("--dark-background", "var(--light-background)");
        root.style.setProperty("--digitBtn-dark", "var(--digitBtn-light)");
        root.style.setProperty("--darkTextColor", "var(--lightTextColor)");
        root.style.setProperty("--operationBtn-grayDarkMode", "var(--operationBtn-grayLightMode)");
        head.style.color = "black";

    } else {
        root.style.setProperty("--dark-background", "#17171C");
        root.style.setProperty("--digitBtn-dark", "#2E2F38");
        root.style.setProperty("--darkTextColor", "#FFFFFF");
        root.style.setProperty("--operationBtn-grayDarkMode", "#4E505F");
        head.style.color = "white";
    }
});