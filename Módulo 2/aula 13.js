function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


function desapear() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    }

    else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}



window.addEventListener('scroll' , desapear)  
                                            //Duas soluções
//setInterval(desapear , 1000)   








/*

    if (window.scrollTop == 0, 0) {
        button.fadeOut('Fast')
    } else {
        button.fadeIn('Fast')
    }
}

    let button = document.querySelector('.scrollbutton')
    if (button.scrollTop == 0 , 0) {
        return false
    } else {
        return true
    }
}

*/
