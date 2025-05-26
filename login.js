document.querySelector('.register').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'register.html';
});

function login() {
    // Perform login logic here
    // For example, validate phone number and password
    const phoneNumber = document.querySelector('#phone_number').value;
    const password = document.querySelector('#password').value;

    // Retrieve the stored values from localStorage
    const registeredPhoneNumber = localStorage.getItem('registeredPhoneNumber');
    const registeredPassword = localStorage.getItem('registeredPassword');

    // Validate the input values against the stored values
    if (phoneNumber === registeredPhoneNumber && password === registeredPassword) {
        // Set login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to home page or any other page
        window.location.href = 'index.html';
    } else {
        alert('Invalid phone number or password');
    }
}

// Add event listener to the login button
document.querySelector('#login-button').addEventListener('click', function(event) {
    event.preventDefault();
    login();
});