function bookingVal() {
    var fullname = document.getElementById("fullName");
    var phoneNumber = document.getElementById("phoneNumber");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var occupation = document.getElementById("occupation");
    var childFullName = document.getElementById("childFullName");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");
    var club = document.getElementById("club");


    if (fullnameVal(fullname)) {
        if (phoneNumberVal(phoneNumber)) {
            if (emailVal(email)) {
                if (addressVal(address)) {
                    if (occupationVal(occupation)) {
                        if (childFullNameVal(childFullName)) {
                            if (ageVal(age)) {
                                if (genderVal(gender)) {

                                    if (clubVal(club)) {

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
            alert("Please fill in Parent's name")
            fulname.focus();
            fullname.style.border = "2px solid red";
            return false;
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

    function occupationVal(occupation) {
        var occupationLen = occupation.value.length;
        if (occupationLen == 0) {
            alert("Please fill in the Occupation field")
            occupation.focus();
            occupation.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function childFullNameVal(childFullName) {
        var childFullNameLen = childFullName.value.length;
        if (childFullNameLen == 0) {
            alert("Please enter the child's full name")
            childFullName.focus();
            childFullName.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function ageVal(age) {
        var ageLen = age.value.length;
        if (keenPhoneLen == 0) {
            alert("Please enter the child's age")
            age.focus();
            age.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function genderVal(gender) {
        var genderLen = gender.value.length;
        if (genderLen == 0) {
            alert("Please select gender")
            gender.focus();
            gender.style.border = "2px solid red"
            return false
        }
        return true;
    }

    function clubVal(club) {
        var clubLen = club.value.length;
        if (clubLen == 0) {
            alert("Please Choose club")
            club.focus();
            club.style.border = "2px solid red"
            return false
        }
        return true;
    }

}