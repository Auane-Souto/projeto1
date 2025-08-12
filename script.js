function scrollToElement(elementSelector, instance = 0){

    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){

        elements[instance].scrollIntoView({behavior: 'smooth'})

    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('header');
});

link2.addEventListener('click', () =>{
    scrollToElement('section');
});

link3.addEventListener('click', () =>{
    scrollToElement('content');
});

// Acesso as documentaçoês
document.getElementById("btn-html").onclick = function () {
  window.open("https://www.w3schools.com/html/default.asp", "_blank");
};

document.getElementById("btn-css").onclick = function () {
  window.open("https://www.w3schools.com/css/default.asp", "_blank");
};

document.getElementById("btn-js").onclick = function () {
  window.open("https://www.w3schools.com/js/default.asp", "_blank");
};




