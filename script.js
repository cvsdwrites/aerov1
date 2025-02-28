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

// Physics Q&A with typo handling
function getAnswer() {
    let question = document.getElementById("question-input").value.trim().toLowerCase();
    let answerBox = document.getElementById("answer");

    let answers = {
        "what is force": "Force is the product of mass and acceleration (F=ma).",
        "what is velocity": "Velocity is speed with a direction (v = d/t).",
        "what is acceleration": "Acceleration is the rate of change of velocity (a = Δv / Δt).",
        "what is newton's first law": "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force.",
        "what is newton's second law": "Newton's Second Law states that Force equals mass times acceleration (F = ma).",
        "what is newton's third law": "Newton's Third Law states that for every action, there is an equal and opposite reaction."
    };

    // Find closest match
    let bestMatch = findClosestMatch(question, Object.keys(answers));
    if (bestMatch) {
        answerBox.innerText = answers[bestMatch];
    } else {
        answerBox.innerText = "I don't know the answer to that yet, but I'm learning!";
    }
}

// Fuzzy matching to handle typos & similar questions
function findClosestMatch(input, keys) {
    let bestMatch = null;
    let highestScore = 0;

    keys.forEach(key => {
        let score = similarity(input, key);
        if (score > highestScore && score > 0.5) { // Acceptable match threshold
            highestScore = score;
            bestMatch = key;
        }
    });

    return bestMatch;
}

// Function to calculate similarity between two strings
function similarity(str1, str2) {
    let longer = str1.length > str2.length ? str1 : str2;
    let shorter = str1.length > str2.length ? str2 : str1;
    
    let matchCount = 0;
    for (let i = 0; i < shorter.length; i++) {
        if (longer.includes(shorter[i])) matchCount++;
    }
    
    return matchCount / longer.length;
}
