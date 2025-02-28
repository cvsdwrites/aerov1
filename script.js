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
    }
});
