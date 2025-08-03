// Function to get users from localStorage
function getUsers() {
    let storedUsers = localStorage.getItem("users");
    console.log("Stored Users:", storedUsers); // Debugging log
    return storedUsers ? JSON.parse(storedUsers) : {}; // Ensure it returns an object
}

// Function to sign up users
function signup(role) {
    let email = document.getElementById(role + "SignupEmail").value.trim();
    let password = document.getElementById(role + "SignupPassword").value.trim();

    let users = getUsers();

    if (users[email]) {
        alert("User already exists! Please login.");
        return;
    }

    users[email] = { password: password, role: role };
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Redirecting to login...");
    window.location.href = role + "employee_auth.html"; // Redirect to login page
}

// Function to log in users
function login(role) {
    let users = getUsers();

    let email = document.getElementById(role + "Email").value.trim();
    let password = document.getElementById(role + "Password").value.trim();

    console.log("Attempting login with:", email, password); // Debugging log
    console.log("Users in system:", users); // Debugging log

    if (users[email] && users[email].password === password) {
        alert("Login Successful! Redirecting...");

        let homePage = role === "employee" ? "index3.html" 
                      : role === "admin" ? "admin_dashboard.html" 
                      : "insurance_dash.html";

        window.location.href = homePage; // Redirect to the correct dashboard
    } else {
        alert("Invalid email or password!"); 
    }
}

// Function to send password reset link
function sendResetLink(role) {
    let email = document.getElementById(role + "ResetEmail").value.trim();
    let users = getUsers();

    if (users[email]) {
        alert("Password reset link sent to " + email);
        window.location.href = role + "_auth.html"; // Redirect to login page
    } else {
        alert("Email not found in system.");
    }
}
