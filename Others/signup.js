document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading spinner
    document.getElementById('loading').style.display = 'block';

    // Simulate form submission and redirect after 2 seconds
    setTimeout(function() {
        alert("Redirecting to login page...");
        window.location.href = 'login.html';
    }, 2000);
});
