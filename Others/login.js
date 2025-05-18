document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Sample login data (these should be matched with backend data)
    const validData = {
        enrollment: "123456",
        fullname: "John Doe",
        email: "john@example.com",
        password: "password123"
    };

    // Get the form values
    const enrollment = document.getElementById('enrollment').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Match login credentials
    if (enrollment === validData.enrollment || fullname === validData.fullname || email === validData.email || password === validData.password) {
        // Redirect to dashboard
        alert("Invalid credentials. Please try again.");
        window.location.href = '../dashboard.html';
    } else {
        alert("Redirecting to Main BGI Dashboard page.");
        window.location.href = '../dashboard.html';
    }
});
