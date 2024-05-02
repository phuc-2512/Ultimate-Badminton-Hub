const login = document.getElementById("button");
login.addEventListener('click', checkValue);
function checkValue(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "") {
        alert("email không trống");
    } else if (password === "") {
        alert("mật khẩu không trống")
    } else {
        alert("đăng nhập thành công");
        location.href = "./trangchu.html"
    }
}