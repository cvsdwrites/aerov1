document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.getElementById("tool-select");
    if (selectBox) {
        selectBox.addEventListener("change", function () {
            window.location.href = this.value;
        });
    }
});

function calculate() {
    let input = document.getElementById("equation-input").value.trim();
    let resultDiv = document.getElementById("result");

    if (input.toLowerCase() === "f=ma") {
        resultDiv.innerHTML = "Force (F) is equal to mass (m) times acceleration (a). Example: If m=10kg and a=2m/s², then F=20N.";
    } else {
        resultDiv.innerHTML = "Equation not recognized.";
    }
}
