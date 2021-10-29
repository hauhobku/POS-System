import React from 'react'
import Cart from '../../components/cart/cart.component'
import Productlist from './../../components/productlist/productlist.component'

function Menu() {
    return (
        <div>
            <div style={{height: '130px'}}></div>
            <Cart/>
            <Productlist num={4} name={'Menu'}/>
        </div>
    )
}

export default Menu
