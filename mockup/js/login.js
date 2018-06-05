function changeActionOfForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        var form = document.getElementById("loginForm");
        form.action = "administration/logedHomeEdit.html";
    }

}