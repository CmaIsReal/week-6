function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
    //To combine the numbers of the fisrt and last name
    let fisrtLast = fisrtName + " " + lastName;
    console.log(fisrtlast);
    // to check name length is less the 20 characters
    if(fisrtLast.length <20){
    alert("Not enough characters. Your first and last name must have at least 20 charactes.");
    return false;
    }
// To check to see id the zip has 5 characters and is a number

    if(zip.length !=5 ||(!Number.isInteger(parseInt(zip)) && parseInt(zip) > 9999)){
        alert("Invalid zip code. Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false;
    }
    console.log("Validated!");
    }

window.addEventListener("DOMContentLoaded"), (event) => {
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit" , validateInput);
    }
};