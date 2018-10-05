function idCard(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var postFullName = firstName + ' ' + lastName;
    document.getElementById('postFullName').innerHTML = postFullName;
    document.getElementById('postAddress').innerHTML = address;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    
    var numberArray = [age, phoneNumber];
    for (var i = 0; i < numberArray.length; i++){
        if (numberArray[i] <= 100){
            document.getElementById('postAge').innerHTML = "Age: " + age;
        }
        else if (numberArray[i] > 100){ 
            document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + phoneNumber;
        }
    }
}
btn.addEventListener('click', idCard);








function addStrings(string1, string2){
    return string1 + string2;
}

function numberCalculation(){
    var number1 = 45;
    var number2 = 78;
    var multiplyNumbers = number1 * number2;
    if (multiplyNumbers < 2000){
        alert("I wish it was a bigger number");
    }
    else {
        alert("That's more like it!");
    }
}
numberCalculation();


function nameInfo(){
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + middleName + lastName;
    document.getElementById('fullName').innerHTML = fullName;
}
btn.addEventListener('click', nameInfo);