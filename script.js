function updateInputs() {
    let equation = document.getElementById("equation").value;
    let inputFields = document.getElementById("input-fields");
    inputFields.innerHTML = ""; // Clear previous inputs

    let inputs = [];
    let aeroMessage = "";

    if (equation === "lift") {
        inputs = [
            { id: "density", label: "Density (ρ) in kg/m³" },
            { id: "velocity", label: "Velocity (V) in m/s" },
            { id: "area", label: "Wing Area (S) in m²" },
            { id: "cl", label: "Lift Coefficient (Cl)" }
        ];
        aeroMessage = "Lift is generated due to pressure differences on a wing!";
    } 
    else if (equation === "drag") {
        inputs = [
            { id: "density", label: "Density (ρ) in kg/m³" },
            { id: "velocity", label: "Velocity (V) in m/s" },
            { id: "area", label: "Wing Area (S) in m²" },
            { id: "cd", label: "Drag Coefficient (Cd)" }
        ];
        aeroMessage = "Drag is the air resistance opposing motion.";
    } 
    else if (equation === "thrust") {
        inputs = [
            { id: "mass", label: "Mass (m) in kg" },
            { id: "acceleration", label: "Acceleration (a) in m/s²" }
        ];
        aeroMessage = "Thrust is the force that moves an aircraft forward!";
    }

    // Update Aero's message
    document.getElementById("aero-message").innerText = `"${aeroMessage}"`;

    // Add input fields dynamically
    inputs.forEach(input => {
        let label = document.createElement("label");
        label.innerText = input.label;
        
        let inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.id = input.id;
        inputElement.step = "any";

        inputFields.appendChild(label);
        inputFields.appendChild(inputElement);
    });
}

function calculate() {
    let equation = document.getElementById("equation").value;
    let resultElement = document.getElementById("result");
    let messageElement = document.getElementById("message");

    let result = 0;
    let message = "";

    if (equation === "lift") {
        let density = parseFloat(document.getElementById("density").value);
        let velocity = parseFloat(document.getElementById("velocity").value);
        let area = parseFloat(document.getElementById("area").value);
        let cl = parseFloat(document.getElementById("cl").value);

        if (isNaN(density) || isNaN(velocity) || isNaN(area) || isNaN(cl)) {
            resultElement.innerText = "Please enter valid numbers.";
            return;
        }

        result = 0.5 * density * (velocity ** 2) * area * cl;
        message = "Lift (L) is measured in Newtons (N).";
    } 
    else if (equation === "drag") {
        let density = parseFloat(document.getElementById("density").value);
        let velocity = parseFloat(document.getElementById("velocity").value);
        let area = parseFloat(document.getElementById("area").value);
        let cd = parseFloat(document.getElementById("cd").value);

        if (isNaN(density) || isNaN(velocity) || isNaN(area) || isNaN(cd)) {
            resultElement.innerText = "Please enter valid numbers.";
            return;
        }

        result = 0.5 * density * (velocity ** 2) * area * cd;
        message = "Drag (D) is measured in Newtons (N).";
    } 
    else if (equation === "thrust") {
        let mass = parseFloat(document.getElementById("mass").value);
        let acceleration = parseFloat(document.getElementById("acceleration").value);

        if (isNaN(mass) || isNaN(acceleration)) {
            resultElement.innerText = "Please enter valid numbers.";
            return;
        }

        result = mass * acceleration;
        message = "Thrust (T) is measured in Newtons (N).";
    }

    resultElement.innerText = "Result: " + result.toFixed(2) + " N";
    messageElement.innerText = message;
}

// Initialize default inputs on page load
updateInputs();
