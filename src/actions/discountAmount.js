import persistentCart from '../persistentCart';

import updateCart from './updateCart'

function findProduct(cart, product) {
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id == product.id){
            if ( cart[i].cantidad > 1 )
                cart[i].cantidad -= 1
        }
    }

    return cart
}

const discountAmount = (product, mark) => {
    let cartProducts = JSON.parse(persistentCart().get());

    Object.keys(cartProducts.productos).map(m => {
        if ( m == mark ) {
            let old = findProduct(cartProducts.productos[mark], product)
            cartProducts.productos[mark] = old
        }
    })

    cartProducts = updateCart(cartProducts)

    return cartProducts
}

export default discountAmount