const login = document.getElementById("button");
login.addEventListener('click', checkValue);
function checkValue(event) {
  event.preventDefault();
  var ten = document.getElementById("text").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(text === "") {
    alert("tên không để trống")
  }else if (email ==="") {
    alert("email không để trống")
  }else if(password ==="") {
    alert("mật khẩu không để trống")
  }else {
    alert("đăng kí thành công")
    location.href = "./dangnhap.html"
  }
}

// local storage

var a = document.getElementById('text-1')
var b = document.getElementById('email-1')
var c = document.getElementById('password-1')

function getInt() {
  localStorage.setItem('Tên', a.value);
  localStorage.setItem()
  localStorage.setItem
}