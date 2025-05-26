document.addEventListener('DOMContentLoaded', function() {
    const getLoanButton = document.getElementById('get-loan-button');

    // Function to check if the user is logged in
    function isLoggedIn() {
        // Check login status from localStorage (or any other method you use)
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    // Disable the "Get Loan" button if the user is not logged in
    if (!isLoggedIn()) {
        getLoanButton.disabled = true;
        getLoanButton.title = "You must be logged in to apply for a loan.";
        getLoanButton.style.cursor = "not-allowed";
    }

    // Optionally, you can add an event listener to show a message when the button is clicked
    getLoanButton.addEventListener('click', function(event) {
        if (!isLoggedIn()) {
            event.preventDefault();
            alert('You must be logged in to apply for a loan.');
        }
    });
});