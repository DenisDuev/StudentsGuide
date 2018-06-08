function changeActionOfForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var form = document.getElementById("loginForm");
    if (username === "admin" && password === "admin") {
        form.action = "administration/logedHomeEdit.html";
    } else if (username && password) {
        form.action = "logedHome.html";
    } else {
        var error = document.getElementById("errorBox");
        alert("Please add you credentials");
        return;
    }

}