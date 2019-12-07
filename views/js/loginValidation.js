function loginVal() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (usernameVal(username, 5, 12)) {
      if (passwordVal(password, 5, 12)) {

      }
    }

    function usernameVal(username, mn, mx) {
      var usernameLen = username.value.length;
      if (usernameLen == 0 || usernameLen >= mx || usernameLen <= mn) {
        alert("Username should be between 5-10 characters")
        username.focus();
        username.style.border = "2px solid red";
        return false;
      }
      return true;
    }

    function passwordVal(password, mn, mx) {
      var passwordVal = password.value.length;
      if (passwordVal == 0 || passwordVal >= mx || passwordVal <= mn) {
        alert("Password should be between 5-10 characters")
        password.focus();
        password.style.border = "2px solid red"
        return false;
      }
      return true;
    }
  }