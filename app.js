//Initializing variables to fetch data
const dob = document.querySelector("#date-dob");
const numLucky = document.querySelector("#num-luck");

const btnCheck = document.querySelector("#btn-check");
const btnReset = document.querySelector("#btn-reset");

const btnPolicy = document.querySelector("#policy");
const btnClose = document.querySelector(".close");

const dataPolicy = document.querySelector(".data-privacy");
const txtResult = document.querySelector("#txt-result");

function isDobLucky() {
    //Initializing block variables
    let dobSum = 0;
    let dobDigits = [];
    //Checking date validity
    if (dob.value == "") {
        txtResult.innerText = "Enter a valid date!"
    } else if (numLucky.value == "") {
        txtResult.innerText = "Please provide a lucky number."
    } else {
        //Split DoB into date, month and year - array
        let dobArr = dob.value.split("-");
        //Split them further into 3 arrays with digits
        dobArr.map(val => {
            dobDigits.push(val.split(""));
        });
        //Iterate over digits and sum the DoB digits
        dobDigits.map(vals => {
            vals.map(num => dobSum += parseInt(num));
        });
        //Check if it is divisible by lucky number
        if (dobSum % parseInt(numLucky.value) == 0) {
            txtResult.innerText = "yaaaaay🎉 \n Your birthday is lucky!!"
        } else {
            txtResult.innerText = "Awwww 🎈 \nYour birthday missed to be lucky :("
        }
    }
}

function closePrivacy() {
    dataPolicy.style.display = "none";
    btnClose.style.display = "none";
}

btnClose.addEventListener('click', closePrivacy);

//Check lucky birthday
btnCheck.addEventListener('click', isDobLucky);
//Reset the data
btnReset.addEventListener('click', function () {
    txtResult.innerText = "";
})
//View privacy policy
btnPolicy.addEventListener('click', function () {
    if (dataPolicy.style.display == "none" || !dataPolicy.style.display) {
        dataPolicy.style.display = "block";
        btnClose.style.display = "block";
    }
    else{
        closePrivacy();
    }       
});


