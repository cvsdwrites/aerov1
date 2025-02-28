document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.getElementById("tool-select");
    
    if (selectBox) {
        selectBox.addEventListener("change", function () {
            const selectedValue = this.value;
            if (selectedValue) {
                window.location.href = selectedValue;  // Redirects to the chosen page
            }
        });
    }
});
