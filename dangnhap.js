const login = document.getElementById("button");
login.addEventListener('click', checkValue);
function checkValue(event) {
  event.preventDefault();
  var text = document.getElementById("text").value;
  var text = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("number-1").value;
  if(text === "") {
    alert("tên không để trống")
  }else if (text ==="") {
    alert("số điện thoại không để trống")
  }else if (email ==="") {
    alert("email không để trống")
  }else if(password ==="") {
    alert("mật khẩu không để trống")
  }else if(number === "") {
    alert("tuổi không để trống")
  }else {
    alert("đăng kí thành công")
    location.href = "./dangnhap.html"
  }
}
 