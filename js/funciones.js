function validar() {
    document.body
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    //alert("Username: " + username + "\nLength: " + username.length);

    if (username.length >= 6 && password.length >= 4) {
        if (isGmail(username)) {
            alert("Login successful!");
            document.forms[0].submit();
        } else {
            alert("El username debe ser un correo de Gmail.");
        }

    } else {
        if (username.length < 6) {
            alert("Username must be at least 6 characters long.");
        } else if (password.length < 4) {
            alert("Password must be at least 4 characters long.");
        }
    }

}

function isGmail(email) {
    var pos = email.indexOf("@gmail.com");
    return pos != -1 && email.length >= 16;
}