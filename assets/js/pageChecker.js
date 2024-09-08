// List of valid page names
const validPages = [
    "sample",
    "test",
    "Helmgaard",
    
];

// Function to check if the entered page exists
function checkPage() {
    const pageInput = document.getElementById("pageInput").value.trim().toLowerCase();
    const errorDiv = document.getElementById("error");

    if (validPages.includes(pageInput)) {
        // If the page exists, redirect to that page
        window.location.href = `/courts-of-bone/${pageInput}`;
    } else {
        // If the page does not exist, display an error message
        errorDiv.textContent = "Access denied. Page is either classified or does not exist. This attempt has been reported to your administrator.";
    }
}
