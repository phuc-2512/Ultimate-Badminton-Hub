const login = document.getElementById("button");
login.addEventListener('click', checkValue);

var email = document.getElementById("email");
var password = document.getElementById("password");

function checkValue(event) {
    event.preventDefault();
    if (email === "") {
        alert("email không trống");
    } else if (password === "") {
        alert("mật khẩu không trống")
    } else {
        alert("đăng nhập thành công");
        location.href = "../html/home.html"
    }
}

var a = localStorage.getItem('Email')
var b = localStorage.getItem('Matkhau')

function checkValue() {
    if(a === email) {
        alert('Tài khoản email sai')
    }
    else if(b === password) {
        alert('Mật khẩu sai')
    }
    else {
        alert('Đăng nhập thành công')
        location.href = '../html/home.html'
    }
}