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
    if ( mark == 'Samsung' ) {
        old = findProduct(cartProducts.productos.Samsung, product)
        cartProducts.productos.Samsung = old
    } else if ( mark == 'Apple') {
        old = findProduct(cartProducts.productos.Apple, product)
        cartProducts.productos.Apple = old
    } else {
        old = findProduct(cartProducts.productos.Motorola, product)
        cartProducts.productos.Motorola = old
    }

    updateCart(cartProducts)
}

export default addProduct