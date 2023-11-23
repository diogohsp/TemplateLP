const botaoMenu= document.getElementsByClassName("c-menu__botao");
const menu= document.getElementById("menu");

for (const linha of botaoMenu)
linha.addEventListener('click', function(){
    
    if (menu.style.display == "flex") {
    menu.style.display = "none";
    } else {
    menu.style.display = "flex";
    }

    console.log(menu.style)
})

window.addEventListener('resize', function() {
    if (window.innerWidth > 1025) {
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
});