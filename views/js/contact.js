function contactValidation() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");

    var email = document.getElementById("email");
    var comment = document.getElementById("comment");

    if (fnameVal(fname)) {
        if (lnameVal(lname)) {
            if (emailVal(email)) {
                if (commentVal(comment)) {

                }
            }

        }
    }

    function fnameVal(fname) {
        var fnameLen = fname.value.length;
        if (fnameLen == 0) {
            alert("Name should not be empty")
            fname.focus();
            fname.style.border = "2px solid red";
            return false;
        }
        return true;
    }

    function lnameVal(lname) {
        var lnameLen = lname.value.length;
        if (lnameLen == 0) {
            alert("Please enter the NIN number")
            lname.focus();
            lname.style.border = "2px solid red"
            return false;
        }
        return true;
    }
}
function emailVal(email) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailFormat)){
        return true;
    }else{
        alert("Please enter correct Email Address format")
        email.focus();
        email.style.border = "2px solid red"
        return false
    }
   
}

function commentVal(comment) {
    var commentLen = comment.value.length;
    if (commentLen == 0) {
        alert("Please enter Phone Number")
        comment.focus();
        comment.style.border = "2px solid red"
        return false
    }
    return true;
}