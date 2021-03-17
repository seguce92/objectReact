import React from 'react'

import Apple from './../assets/images/Apple.png'
import Samsung from './../assets/images/Samsung.png'
import Motorola from './../assets/images/Motorola.png'

import removeProduct from '../actions/removeProduct'
import addProduct from '../actions/addProduct'
import discountAmount from '../actions/discountAmount'


class AddProduct extends React.Component {
    render () {
        let phone = this.props.phone;
        let mark = this.props.mark

        return (
            <li className="flex relative">
                <button className="fixed bg-white rounded-full p-1 shadow-lg border"
                    onClick={ () => removeProduct(phone, mark) }
                    title="Eliminar">
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
                        <div className="flex space-x-4">
                            <button className="bg-gray-200 font-bold w-6 h-6 rounded hover:shadow-lg"
                                onClick={ () => discountAmount(phone, mark) }>-</button>
                            <button className="bg-gray-200 font-bold w-6 h-6 rounded hover:shadow-lg"
                                onClick={ () => addProduct(phone, mark) }>+</button>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default AddProduct