function menuclick() {
    let menu = document.getElementById('menu-area')

    if(menu.classList.contains('menu-opened') == true) {
        menu.classList.remove('menu-opened')
    } else {
        menu.classList.add('menu-opened')
    }
}





// Outra solução 


// Pra ela funcionar precisa tirar o .menu-opened do css e colocar um style="width: 200px;" no html

/*
function menuclick() {
    let menu = document.getElementById("menu-area") 

    if (menu.style.width == '200px') {
        menu.style.width = '0px';
    } else {
        menu.style.width = '200px';
    }
}
*/