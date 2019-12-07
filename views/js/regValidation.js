function regValidation() {
    var fullname = document.getElementById("fullName");
    var ninNumber = document.getElementById("ninNumber");
    var eidNumber = document.getElementById("eidNumber");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var gender = document.getElementById("gender");
    var address = document.getElementById("address");
    var keenName = document.getElementById("keenName");
    var keenAddress = document.getElementById("keenAddress");
    var keenPhone = document.getElementById("keenPhone");
    var createPassword = document.getElementById("createPassword");



    if (fullnameVal(fullname)) {
        if (ninNumberVal(ninNumber)) {
            if (eidNumberVal(eidNumber)) {
                if (emailVal(email)) {
                    if (phoneNumberVal(phoneNumber)) {
                        if (genderVal(gender)) {
                            if (addressVal(address)) {
                                if (keenNameVal(keenName)) {
                                    if (keenAddressVal(keenAddress)) {
                                        if (keenPhoneVal(keenPhone)) {
                                            if (createPasswordVal(createPassword)) {

                                            }
                                        }
                                    }

                                }
                            }

                        }
                    }
                }
            }

        }
    }

    function fullnameVal(fullname) {
        var fullnameLen = fullname.value.length;
        if (fullnameLen == 0) {
            alert("Name should not be empty")
            fullname.focus();
            fullname.style.border = "2px solid red";
            return false;
        }
        return true;
    }

    function ninNumberVal(ninNumber) {
        var ninNumberLen = ninNumber.value.length;
        if (ninNumberLen == 0) {
            alert("Please enter the NIN number")
            ninNumber.focus();
            ninNumber.style.border = "2px solid red"
            return false;
        }
        return true;
    }

    function eidNumberVal(eidNumber) {
        var eidNumberLen = eidNumber.value.length;
        if (eidNumberLen == 0) {
            alert("Please enter EID Number")
            eidNumber.focus();
            eidNumber.style.border = "2px solid red"
            return false
        }
        return true;
    }
    function emailVal(email) {
        var emailLen = email.value.length;
        if (emailLen == 0) {
            alert("Please enter Email Address")
            email.focus();
            email.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function phoneNumberVal(phoneNumber) {
        var phoneNumberLen = phoneNumber.value.length;
        if (phoneNumberLen == 0) {
            alert("Please enter Phone Number")
            phoneNumber.focus();
            phoneNumber.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function genderVal(gender) {
        var genderLen = gender.value.length;
        if (genderLen == 0) {
            alert("Please enter EID Number")
            gender.focus();
            gender.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function addressVal(address) {
        var addressLen = address.value.length;
        if (addressLen == 0) {
            alert("Please enter Residential Address")
            address.focus();
            address.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function keenNameVal(keenName) {
        var keenNameLen = keenName.value.length;
        if (keenNameLen == 0) {
            alert("Please enter next of keen's full name")
            keenName.focus();
            keenName.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function keenAddressVal(keenAddress) {
        var keenAddressLen = eidNumber.value.length;
        if (keenAddressLen == 0) {
            alert("Please enter next of keen's Address")
            keenAddress.focus();
            keenAddress.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function keenPhoneVal(keenPhone) {
        var keenPhoneLen = keenPhone.value.length;
        if (keenPhoneLen == 0) {
            alert("Please enter next of keen's phone number")
            keenPhone.focus();
            keenPhone.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function createPasswordVal(createPassword) {
        //To check a password between 8 to 15 characters which contain at least one lowercase letter, 
        //one uppercase letter, one numeric digit, and one special character
        var PasswordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (createPassword.value.match(PasswordFormat)) {
            return true;
        }else{
            alert("Please create proper password format")
            createPassword.focus();
            createPassword.style.border = "2px solid red"
            return false
        }
      
    }

}