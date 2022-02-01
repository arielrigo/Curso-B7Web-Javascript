const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
let modalQT = 1
let modalKey = 0
let cart = []

pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)


    pizzaItem.setAttribute('data-key', index)

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--img img').src = item.img

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key') // pega qual pizza é
        modalQT = 1 // reseta a quantidade
        modalKey = key // e vai dizer qual é a pizza

        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo--actualPrice').innerHTML = `${pizzaJson[key].price.toFixed(2)}`

        c('.pizzaInfo--size.selected').classList.remove('selected') // ele pega a classe selected dentro de pizzaInfo--size e remove "selected" dela.

        // Deixar a grande selecionada
        cs('.pizzaInfo--size').forEach((size, sizeindex) => {
            if (sizeindex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeindex]
        })

        c('.pizzaInfo--qt').innerHTML = modalQT

        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'

        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1
        }, 200)  // transição Modal



    })


    c('.pizza-area').append(pizzaItem)
})



// EVENTOS DO MODAL


function CloseModal() {
    c('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

cs('.pizzaInfo--cancelMobileButton , .pizzaInfo--cancelButton').forEach((item) => {
    item.addEventListener('click', CloseModal)
})


// seleção de quantidade das pizzas (-)
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQT > 1) {
        modalQT--
        c('.pizzaInfo--qt').innerHTML = modalQT
    }
})

// seleção de quantidade das pizzas (+)
c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQT++
    c('.pizzaInfo--qt').innerHTML = modalQT
})


// seleção de (Pequena , Media , Grande)
cs('.pizzaInfo--size').forEach((size, sizeindex) => {
    size.addEventListener('click', (e) => {
        c('.pizzaInfo--size.selected').classList.remove('selected') // Desmarca tudo
        size.classList.add('selected') //Marca o que eu quiser
    });
});


// Sistema de carrinho
c('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))

    let identifier = pizzaJson[modalKey].id + '@' + size

    let key = cart.findIndex((item) => item.identifier == identifier) // ele vai fazer uma varredura no carrinho e vai pegar o identifier que seja igual a ele mesmo

    if (key > -1) { 
        cart[key].qt += modalQT // se ele achar a pizza no carrinho ele apenas aumenta um numero no modalQT
    } else { // senão ele vai adicionar uma nova pizza ao carrinho

        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQT
        })
    }
    
    CloseModal()
    updateCart()
})


//Mobile
c('.menu-openner').addEventListener('click' , ()=> {
    if ( cart.length > 0) {
        c('aside').style.left = '0'
    }
})

c('.menu-closer').addEventListener('click' , ()=> {
    c('aside').style.left = '100vw'
})
//Mobile



function updateCart() {


    //Mobile
    c('.menu-openner span').innerHTML = cart.length
    //Mobile


    if(cart.length > 0) {
        c('aside').classList.add('show')
        c('.cart').innerHTML = ''

        let subtotal = 0 
        let desconto = 0
        let total = 0

        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id) // o id do item tem que ser o mesmo do item do carrinho

            subtotal += pizzaItem.price * cart[i].qt

            let cartItem = c('.models .cart--item').cloneNode(true)

            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break
                case 1:
                    pizzaSizeName = 'M';
                    break
                case 2: 
                    pizzaSizeName = 'G';
                    break
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`
    
            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click' , ()=> {
                if (cart[i].qt > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i , 1)
                }
                updateCart()
            })

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click' , ()=> {
                cart[i].qt++
                updateCart()
            })

            c('.cart').append(cartItem)
        }
        
        desconto = subtotal * 0.1
        total = subtotal - desconto

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`

    } else {
        c('aside').classList.remove('show')

        //Mobile
        c('aside').style.left = '100vw'
        //Mobile       
    }
}