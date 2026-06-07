function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        document.getElementById("message").innerHTML =
        "Please fill all fields";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("message").innerHTML =
    "Registration Successful!";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === savedUser && password === savedPass){
        document.getElementById("message").innerHTML =
        "Login Successful!";
    }
    else{
        document.getElementById("message").innerHTML =
        "Invalid Username or Password";
    }
}