const errorMsg   = document.getElementById("error-msg");
const formLoader = document.getElementById("form-loader");
const successMsg = document.getElementById("nameDisplay");
const dataForm = document.getElementById("formData");
const successMsgBox = document.getElementById("successMsgBox");
const bgMusk = document.getElementById("bg-musk");
// form-data-initialization
const personName  = document.getElementById("personName");
const personEmail = document.getElementById("personEmail");
const resName     = document.getElementById("resName");
const resAddress  = document.getElementById("resAddress");
const resCity     = document.getElementById("resCity");
const resCountry  = document.getElementById("resCountry");
const submitBtn = document.getElementById("submitForm");

submitForm.addEventListener("click", (e) => {
    disLoader();
   setTimeout(() => {
       hideLoader();
       checkField();
       
   }, 3000);
   
    e.preventDefault();
    
})
// show-loader
function disLoader() {
    formLoader.style = "display:block";
}
// hide-loader
function hideLoader() {
    formLoader.style = "display:none";
}
// form-validation
function checkField() {
     if (personName.value === "") {
        errorMsg.innerText = "Please enter your name.";
    }
    else if (personEmail.value === "") {
        errorMsg.innerText = "Please enter your Email.";
    }
   else if (resName.value === "") {
        errorMsg.innerText = "Please enter restaurant name.";
    }
    else if (resAddress.value === "") {
        errorMsg.innerText = "Please enter restaurant address.";
    }
    else if (resCity.value === "") {
        errorMsg.innerText = "Please enter restauran city.";
    }
    else if (resCountry.value === "") {
        errorMsg.innerText = "Please enter restauran country.";
    }
    else {
        
        dataForm.style = "display:none";
        successMsg.innerText = personName.value;
        successMsgBox.style = "display:block";
         
    }
} 

