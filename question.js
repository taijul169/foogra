// Submit-rider-question-validation
const riderCity = document.getElementById("riderCity");
const option = document.getElementsByTagName("option");
const nextBtn = document.getElementById("nextBtn");
const firstQuestion = document.querySelector(".q-one");
const secondQustion = document.querySelector(".q-two");
const thirdQuestion = document.querySelector(".q-three");
const fourthQuestion = document.querySelector(".q-four");
const singleItem = document.querySelectorAll('.single-question');
let prev = 0;
let count = 1;
nextBtn.addEventListener('click', (e) => {
    const x = riderCity.selectedIndex;
    const optionValue = option[x].value;
    singleItem[count].style = "display:block";
    singleItem[prev].style = "display:none";
    count += 1;
    prev += 1;
    if (count > singleItem.length-1) {
        count = 0;
        
    }
    e.preventDefault();
})