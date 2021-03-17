import React from 'react'

import AddProduct from './AddProduct'
import persistentCart from '../persistentCart'

class ShoppingCart extends React.Component {
    render () {
        let shop = JSON.parse(persistentCart().get());
        shop.productos.Apple.map(group => 
            console.log(group)
        )
        return (
            <div className="px-4 py-6">
                <h2 className="text-lg font-bold">Tu Carrito</h2>
                <div className="w-full flex justify-between my-2">
                    <span>Total Productos: { shop.total_productos }</span>
                    <span>Total a Pagar: $ { shop.total_suma }</span>
                </div>
                <ul className="w-full bg-white space-y-3 flex flex-col mt-4 bg-white rounded-md px-2 py-3 shadow-lg">
                    {
                        shop.productos.Apple.map(phone => <AddProduct key={phone.id} phone={ phone } mark="Apple" /> )
                    }
                    {
                        shop.productos.Samsung.map(phone => <AddProduct key={phone.id} phone={ phone } mark="Samsung" /> )
                    }
                    {
                        shop.productos.Motorola.map(phone => <AddProduct key={phone.id} phone={ phone } mark="Motorola" /> )
                    }
                </ul>
            </div>
        );
    }
}

export default ShoppingCart