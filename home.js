// Footer-link-collapse
function myFunCollapse(data) {
    const link = document.querySelector('.' + data);
    link.classList.toggle('showLink');  
}

//Filter-option-expand----
function filoption_collapse(id,cls) {
    const options = document.getElementById(id);
    const downIcon = document.getElementById(cls);
    if (options.classList.contains('showfilterOption')){
        options.classList.remove('showfilterOption');
        downIcon.classList.remove('rotate-icon');
    }
    else {
        options.classList.add('showfilterOption');
        downIcon.classList.add('rotate-icon');
    }
}
// filter-distance-displaying value
// var slider = document.getElementById("myRange");
// var output = document.getElementById("disValue");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
// Responsive SubMenu-expand

function subMenuExpan(data) {
    let x = screen.width;
    if (x <= 991) {
       const link = document.querySelector('.' + data);
       link.classList.toggle('showSubMenu');
    }


}

// Sidebar-close-function
const closeBtn = document.getElementById('nav-close');
const sidenav = document.getElementById('sidenav');
closeBtn.addEventListener("click", () => {
    sidenav.style = "left:-500px";
});
const barIcon = document.getElementById("ResmenuIcon");
barIcon.addEventListener('click', () => {
    console.log("i am bar")
    sidenav.style = "left:0px";
});
// date-picker-activation

var highlight1 = {
    start: new Date(2015, 6, 13),
    end: new Date(2015, 6, 19),
    backgroundColor: '#3faa56',
    color: '#ffffff',
    legend: 'CSS.Conf.'
};
var highlight2 = {
    dates: [
        {
            start: new Date(2015, 6, 6),
            end: new Date(2015, 6, 7)
        },
        {
            start: new Date(2015, 6, 22),
            end: new Date(2015, 6, 23)
        }
    ],
    backgroundColor: '#e99c00',
    color: '#ffffff',
    legend: 'Holidays'
};
var current_date = new Date().getDate();
var datepicker = new Datepickk({
    container: document.getElementById('date-picker'),
    inline: true,
    range: true
    // highlight: current_date
});
datepicker.setDate = new Date();


//   reserve-lunch-dinner-peple-box-toggle
    function lunchDinnerToggle(id) {
        const tabId = document.querySelector('#'+id);
        if (tabId.classList.contains('showlunchDinner')) {
            tabId.classList.remove('showlunchDinner');
        }
        else {
            tabId.classList.add('showlunchDinner');
        }
    }