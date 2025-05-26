document.querySelector('#register-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the input values
    const phoneNumber = document.querySelector('#phone_number').value;
    const password = document.querySelector('#password').value;

    // Validate the input values (basic validation)
    if (phoneNumber && password) {
        // Store the input values in localStorage
        localStorage.setItem('registeredPhoneNumber', phoneNumber);
        localStorage.setItem('registeredPassword', password);

        // Redirect to the login page
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
});