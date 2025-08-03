document.addEventListener("DOMContentLoaded", function () {
    // Check if user is already logged in
    if (localStorage.getItem("loggedInUser")) {
        window.location.href = "dashboard.html";
    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Simple user authentication check (Replace with backend later)
        let storedUser = localStorage.getItem(email);

        if (storedUser && JSON.parse(storedUser).password === password) {
            localStorage.setItem("loggedInUser", email);
            window.location.href = "dashboard.html"; // Navigate to Home
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let user = { name: name, email: email, password: password };
        localStorage.setItem(email, JSON.stringify(user)); // Store user data
        localStorage.setItem("loggedInUser", email);

        alert("Registration Successful! Redirecting...");
        window.location.href = "dashboard.html"; // Navigate to Home
    });
});
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedInUser")) {
        window.location.href = "dashboard.html"; // Redirect logged-in users
    }
});
