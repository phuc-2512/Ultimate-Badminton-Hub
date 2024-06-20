const login = document.getElementById("button");
login.addEventListener('click', checkValue);

var ten = document.getElementById("text");
var email = document.getElementById("email");
var password = document.getElementById("password");

function checkValue(event) {
  event.preventDefault();
  if (ten === "") {
    alert("tên không để trống")
  } else if (email === "") {
    alert("email không để trống")
  } else if (password === "") {
    alert("mật khẩu không để trống")
  } else {
    alert("đăng kí thành công")
    localStorage.setItem('Ten', ten.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Matkhau', password.value);
    location.href = "../html/dangnhap.html"
  }
}