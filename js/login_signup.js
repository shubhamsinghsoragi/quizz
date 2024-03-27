document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    // Here you can perform AJAX request to server for login validation
    // For example, using Fetch API
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("loginMessage").innerText = data.message;
        if (data.success) {
            // Redirect to dashboard or home page upon successful login
            window.location.href = "/dashboard.html";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("loginMessage").innerText = "An error occurred. Please try again later.";
    });
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    // Here you can perform AJAX request to server for signup
    // For example, using Fetch API
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("signupMessage").innerText = data.message;
        if (data.success) {
            // Redirect to dashboard or home page upon successful signup
            window.location.href = "/dashboard.html";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("signupMessage").innerText = "An error occurred. Please try again later.";
    });
});
