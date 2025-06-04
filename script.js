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
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    scrollToElement('.section');
});

link3.addEventListener('click', () =>{
    scrollToElement('.content');
});

document.addEventListener("DOMContentLoaded", function() {
    const links = [
        "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
    ];

    let index = 0; // Índice para alternar os links

    document.querySelectorAll(".btn").forEach(botao => {
        botao.addEventListener("click", function() {
            window.location.href = links[index]; // Redireciona para o link atual
            index = (index + 1) % links.length; // Alterna ciclicamente entre os links
        });
    });
});



