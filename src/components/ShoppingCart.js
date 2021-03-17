import React, { useEffect } from 'react'

import persistentCart from '../persistentCart'
import Apple from './../assets/images/Apple.png'
import Samsung from './../assets/images/Samsung.png'
import Motorola from './../assets/images/Motorola.png'

import removeProduct from '../actions/removeProduct'
import addProduct from '../actions/addProduct'
import discountAmount from '../actions/discountAmount'

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: []
        };
    }

    render () {
        const { shop } = this.state;

        let keys = Object.keys(shop.productos)

        return (
            <div className="px-4 py-6">
                <h2 className="text-lg font-bold">Tu Carrito</h2>
                <div className="w-full flex justify-between my-2">
                    <span>Total Productos: { shop.total_productos }</span>
                    <span>Total a Pagar: $ { shop.total_suma }</span>
                </div>
                {
                    keys.map(mark =>
                        shop.productos[mark].length > 0 &&
                        <ul key={mark} className="w-full bg-white space-y-3 flex flex-col mt-4 rounded-md px-2 py-3 shadow-lg">
                            <h2 class="font-bold">Productos de: {mark}</h2>
                            {shop.productos[mark].map(phone => 
                                <li key={phone.id} className="flex relative">
                                    <button className="fixed bg-white rounded-full p-1 shadow-lg border"
                                        onClick={ () => this.setState({
                                                shop: removeProduct(phone, mark)
                                            })
                                        } title="Eliminar">
                                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    <img src={ 
                                        mark === 'Apple' ? 
                                            Apple : mark === 'Samsung' ? 
                                                Samsung : Motorola
                                        }
                                        className="w-10 mx-3" />
                                    <div className="flex-1 flex justify-between ml-2">
                                        <div>
                                            <h2 className="font-bold">Marca: { mark }</h2>
                                            <p className="text-xs">Modelo: { phone.modelo }</p>
                                            <p className="text-xs">Color: { phone.color }</p>
                                        </div>
                                        <div class="flex flex-col items-center my-auto">
                                            <label className="font-bold text-lg">$ { phone.precio * phone.cantidad }</label>
                                            <div className="flex space-x-2">
                                                <button className="bg-gray-200 font-bold w-6 h-6 rounded hover:shadow-lg"
                                                    onClick={ () => this.setState({
                                                            shop: discountAmount(phone, mark) 
                                                        })
                                                    }>-</button>
                                                <label>{ phone.cantidad }</label>
                                                <button className="bg-gray-200 font-bold w-6 h-6 rounded hover:shadow-lg"
                                                    onClick={ () => this.setState({
                                                            shop: addProduct(phone, mark)
                                                        }) 
                                                    }>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    )
                    
                }
            </div>
        );
    }

    componentWillMount() {
        this.setState({
            shop: JSON.parse(persistentCart().get())
        })
    }
}

export default ShoppingCart