import updateCart from './updateCart';
import persistentCart from '../persistentCart'


const removeProduct = (product, mark) => {
    let cartProducts = JSON.parse(persistentCart().get());

    if ( mark == 'Samsung' ) {
        cartProducts.productos.Samsung = cartProducts.productos.Samsung.filter(function(p) {
            return p.id !== product.id; 
        });
    } else if ( mark == 'Apple') {
        cartProducts.productos.Apple = cartProducts.productos.Apple.filter(function(p) {
            return p.id !== product.id; 
        });
    } else {
        cartProducts.productos.Motorola = cartProducts.productos.Motorola.filter(function(p) {
            return p.id !== product.id; 
        });
    }

    updateCart(cartProducts)
}

export default removeProduct