import persistentCart from '../persistentCart';

import updateCart from './updateCart'

function findProduct(cart, product) {
    let exist = false;

    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === product.id){
            cart[i].cantidad += 1
            exist = true;
        }
    }

    if ( !exist ) {
        cart.push(product)
    }

    return cart
}

const addProduct = (product, mark) => {
    let cartProducts = JSON.parse(persistentCart().get());
    let old = []
    

    Object.keys(cartProducts.productos).map(m => {
        if ( m == mark ) {
            let old = findProduct(cartProducts.productos[m], product)
            cartProducts.productos[m] = old
        }
    })

    cartProducts = updateCart(cartProducts)

    return cartProducts
}

export default addProduct