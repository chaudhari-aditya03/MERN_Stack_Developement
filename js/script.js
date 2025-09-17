// Add a 'DOMContentLoaded' event listener to ensure the script runs after the page has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the login button and store it in a variable
    const loginButton = document.getElementById('submit');

    // Add a click event listener to the login button
    loginButton.addEventListener('click', function() {
        // Get the values from the username and password input fields
        const username = document.getElementById('uname').value;
        const password = document.getElementById('pass').value;

        // Perform a basic validation check
        if (username === 'admin' && password === 'password123') {
            // Show a success message using an alert
            alert('Login successful! Welcome.');
            // You can also redirect the user to another page here, e.g., window.location.href = "dashboard.html";
        } else {
            // Show an error message for invalid credentials
            alert('Invalid username or password. Please try again.');
        }
    });
});