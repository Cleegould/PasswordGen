var password = document.getElementById("password");

function generatePassword() {
    
    var ucase = window.prompt("Would you like to include upper case letters? Y/N");//this prompts the questions Uppercase, lower case, number, special caharcters
    var lcase = window.prompt("Would you like to include lower case letters? Y/N");
    var nums = window.prompt("Would you like to include numbers? Y/N");
    var chars = window.prompt("Would you like to include special characters? Y/N");
    var passwordLength = window.prompt("Password length?");// this prompts for the number of character wanted
    var charPool = "";

    if (ucase.toUpperCase() == "Y") {
        charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lcase.toUpperCase() == "Y") {
        charPool += "abcdefghijklmnopqrstuvwxyz";
    }
    if (nums.toUpperCase() == "Y") {
        charPool += "0123456789";
    }
    if (chars.toUpperCase() == "Y") {
        charPool += "!@#$%^&*()";
    }

    if (ucase.toUpperCase() == "N" &&
        lcase.toUpperCase() == "N" &&
        nums.toUpperCase() == "N" &&
        chars.toUpperCase() == "N") {
        window.alert("You must select at least one character type!");//this is in case you choose no on everything
        return;
    }

    console.log(charPool);//show the built character pool in the console

    var password = "";
     for (var i = 0; i <= passwordLength; i++) {
         var randomNumber = Math.floor(Math.random() * charPool.length);
         password += charPool.substring(randomNumber, randomNumber +1);
        }
    console.log(password);//show the new password in the console
    document.getElementById("password").value = password;
}

