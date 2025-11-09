// Smooth fade-in effect for every page
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.7s";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);
});

// Card hover effect (applies only if cards exist)
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.boxShadow = "0px 8px 20px rgba(255, 255, 255, 0.3)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// Basic form validation (works for login, register, contact)
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll("input, textarea");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill all fields!");
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}

// Predict button animation (if predict page exists)
const predictBtn = document.querySelector("#predict-btn");
if (predictBtn) {
    predictBtn.addEventListener("click", () => {
        predictBtn.innerHTML = "Predicting...";
        predictBtn.style.opacity = "0.6";
        predictBtn.style.pointerEvents = "none";

        // Simulate prediction delay
        setTimeout(() => {
            predictBtn.innerHTML = "Predict Again";
            predictBtn.style.opacity = "1";
            predictBtn.style.pointerEvents = "auto";
            alert("Prediction Completed!");
        }, 1500);
    });
}