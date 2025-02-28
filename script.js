document.addEventListener("DOMContentLoaded", function () {
    // Dropdown navigation
    const selectBox = document.getElementById("tool-select");
    if (selectBox) {
        selectBox.addEventListener("change", function () {
            let selectedPage = this.value;
            if (selectedPage) {
                window.location.href = selectedPage;
            }
        });
    }

    // Physics Calculator
    const calculateButton = document.getElementById("calculate-btn");
    if (calculateButton) {
        calculateButton.addEventListener("click", function () {
            let input = document.getElementById("equation-input").value.trim().toLowerCase();
            let resultDiv = document.getElementById("result");

            let equations = {
                "force": (m, a) => m * a, // F = ma
                "displacement": (v, u, t, a) => u * t + 0.5 * a * t ** 2, // s = ut + 0.5at²
                "velocity": (u, a, t) => u + a * t, // v = u + at
                "acceleration": (v, u, t) => (v - u) / t, // a = (v - u) / t
                "momentum": (m, v) => m * v, // p = mv
                "kinetic energy": (m, v) => 0.5 * m * v ** 2, // KE = 0.5mv²
                "potential energy": (m, g, h) => m * g * h, // PE = mgh
                "work": (f, d) => f * d, // W = Fd
                "power": (w, t) => w / t, // P = W/t
                "resistance": (v, i) => v / i, // R = V/I (Ohm's Law)
                "current": (v, r) => v / r, // I = V/R
                "capacitance": (q, v) => q / v, // C = Q/V
                "wave speed": (f, λ) => f * λ // v = fλ
            };

            let equationKeys = Object.keys(equations);
            let foundEquation = equationKeys.find(eq => input.includes(eq));

            if (foundEquation) {
                let variables = prompt(`Enter values for ${foundEquation} (comma-separated). Example: 10, 2`);
                let values = variables.split(",").map(Number);

                if (values.some(isNaN)) {
                    resultDiv.innerHTML = "Invalid input. Please enter numbers.";
                    return;
                }

                let result = equations[foundEquation](...values);
                resultDiv.innerHTML = `Result: ${result.toFixed(2)}`;
            } else {
                resultDiv.innerHTML = "Equation not recognized. Try 'force' or 'velocity'.";
            }
        });
    }
});
    // Physics Calculator
    const calculateButton = document.getElementById("calculate-btn");
    if (calculateButton) {
        calculateButton.addEventListener("click", function () {
            let input = document.getElementById("equation-input").value.trim().toLowerCase();
            let resultDiv = document.getElementById("result");

            let equations = {
                "f=ma": "Force (F) is equal to mass (m) times acceleration (a). Example: If m=10kg and a=2m/s², then F=20N.",
                "v=d/t": "Velocity (v) is equal to distance (d) divided by time (t). Example: If d=100m and t=5s, then v=20m/s."
            };

            resultDiv.innerHTML = equations[input] || "Equation not recognized. Try F=ma or V=D/T.";
        });
    }

    // Physics Q&A
    const askButton = document.getElementById("ask-btn");
    if (askButton) {
        askButton.addEventListener("click", function () {
            let question = document.getElementById("question-input").value.trim().toLowerCase();
            let answerBox = document.getElementById("answer");

            let answers = {
                // Mechanics
                "what is newton's first law": "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force.",
                "what is newton's second law": "Newton's Second Law states that Force equals mass times acceleration (F = ma).",
                "what is newton's third law": "Newton's Third Law states that for every action, there is an equal and opposite reaction.",
                "what is velocity": "Velocity is speed with a direction (v = d/t).",
                "what is acceleration": "Acceleration is the rate of change of velocity (a = Δv / Δt).",
                "what is momentum": "Momentum (p) is the product of mass and velocity (p = mv).",
                "what is impulse": "Impulse is the change in momentum, given by Force × time (Δp = FΔt).",
                "what is work done": "Work is force times distance in the direction of the force (W = Fd cosθ).",
                "what is power": "Power is the rate of doing work (P = W/t).",
                "what is kinetic energy": "Kinetic Energy (KE) is given by (1/2)mv².",
                "what is potential energy": "Gravitational Potential Energy (GPE) is given by mgh.",
                
                // Waves
                "what is a wave": "A wave is a disturbance that transfers energy from one place to another without transferring matter.",
                "what is the difference between transverse and longitudinal waves": "Transverse waves oscillate perpendicular to the direction of energy transfer, while longitudinal waves oscillate parallel to it.",
                "what is wave speed": "Wave speed (v) is given by frequency (f) times wavelength (λ): v = fλ.",
                "what is refraction": "Refraction is the bending of light as it passes from one medium to another due to a change in speed.",
                "what is diffraction": "Diffraction is the spreading of waves around obstacles or through gaps.",
                "what is interference": "Interference occurs when two waves meet and superpose, forming constructive or destructive interference.",
                
                // Electricity & Magnetism
                "what is ohm's law": "Ohm's Law states that voltage (V) is equal to current (I) times resistance (R): V = IR.",
                "what is resistance": "Resistance is the opposition to the flow of electric current, measured in ohms (Ω).",
                "what is capacitance": "Capacitance is the ability of a capacitor to store charge per unit voltage (C = Q/V).",
                "what is electromagnetic induction": "Electromagnetic induction occurs when a changing magnetic field induces a voltage in a conductor.",
                "what is faraday's law": "Faraday's Law states that the induced emf is proportional to the rate of change of magnetic flux.",
                
                // Thermal Physics
                "what is specific heat capacity": "Specific Heat Capacity (c) is the amount of heat required to raise the temperature of 1kg of a substance by 1°C.",
                "what is latent heat": "Latent heat is the heat required to change the phase of a substance without changing its temperature.",
                
                // Quantum & Particle Physics
                "what is the photoelectric effect": "The photoelectric effect is the emission of electrons from a metal surface when exposed to light of sufficient frequency.",
                "what is a photon": "A photon is a quantum of electromagnetic energy, given by E = hf.",
                "what is wave-particle duality": "Wave-particle duality states that particles such as electrons exhibit both wave-like and particle-like properties.",
                
                // Relativity
                "what is time dilation": "Time dilation occurs in special relativity, where time moves slower for objects moving close to the speed of light.",
                "what is length contraction": "Length contraction states that an object's length appears shorter when moving at relativistic speeds.",
                
                // Astrophysics
                "what is a black hole": "A black hole is a region of space with gravity so strong that nothing, not even light, can escape.",
                "what is the big bang theory": "The Big Bang Theory describes the origin of the universe as an explosion from a singularity 13.8 billion years ago.",
                "what is dark matter": "Dark matter is an unknown form of matter that does not emit light but has gravitational effects on galaxies.",
                
                // Miscellaneous
                "what is hooke's law": "Hooke's Law states that the force needed to extend or compress a spring is proportional to the displacement (F = kx).",
                "what is simple harmonic motion": "Simple Harmonic Motion (SHM) occurs when an object's acceleration is proportional to its displacement and directed toward equilibrium."
            };

            answerBox.innerText = answers[question] || "I don't know the answer to that yet, but I'm learning!";
        });
document.addEventListener("DOMContentLoaded", function () {
    // Maths Calculator
    const mathCalculateButton = document.getElementById("math-calculate-btn");
    if (mathCalculateButton) {
        mathCalculateButton.addEventListener("click", function () {
            let input = document.getElementById("math-equation-input").value.trim().toLowerCase();
            let resultDiv = document.getElementById("math-result");

            let mathEquations = {
                "quadratic roots": (a, b, c) => {
                    let discriminant = b ** 2 - 4 * a * c;
                    if (discriminant < 0) return "No real roots";
                    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                    return `Roots: ${root1.toFixed(2)}, ${root2.toFixed(2)}`;
                },
                "pythagoras theorem": (a, b) => Math.sqrt(a ** 2 + b ** 2), // c = √(a² + b²)
                "trigonometry sine": (θ) => Math.sin(θ * (Math.PI / 180)).toFixed(4), // sin(θ)
                "trigonometry cosine": (θ) => Math.cos(θ * (Math.PI / 180)).toFixed(4), // cos(θ)
                "trigonometry tangent": (θ) => Math.tan(θ * (Math.PI / 180)).toFixed(4), // tan(θ)
                "area of circle": (r) => Math.PI * r ** 2, // A = πr²
                "circumference of circle": (r) => 2 * Math.PI * r, // C = 2πr
                "logarithm": (x, base) => Math.log(x) / Math.log(base), // log(x) base (b)
                "derivative of x^n": (n) => `${n}x^${n - 1}`, // d/dx (x^n) = nx^(n-1)
                "simple interest": (p, r, t) => (p * r * t) / 100, // SI = PRT/100
                "compound interest": (p, r, t) => p * (1 + r / 100) ** t // CI = P(1 + r/100)^t
            };

            let equationKeys = Object.keys(mathEquations);
            let foundEquation = equationKeys.find(eq => input.includes(eq));

            if (foundEquation) {
                let variables = prompt(`Enter values for ${foundEquation} (comma-separated). Example: 2, 5, 3`);
                let values = variables.split(",").map(Number);

                if (values.some(isNaN)) {
                    resultDiv.innerHTML = "Invalid input. Please enter numbers.";
                    return;
                }

                let result = mathEquations[foundEquation](...values);
                resultDiv.innerHTML = `Result: ${result}`;
            } else {
                resultDiv.innerHTML = "Equation not recognized. Try 'quadratic roots' or 'area of circle'.";
            }
        });
    }
});
