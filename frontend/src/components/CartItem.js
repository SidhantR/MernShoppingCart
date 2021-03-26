import React from 'react'
import {Link} from 'react-router-dom'
import './CartItem.css'

const CartItem = ({item, qtyChangeHandler, removeCartHandler}) => {
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartItem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartItem__price"> ${item.price}</p>
            <select className="cartItem__select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartItem__deleteBtn" onClick={() => removeCartHandler(item.product)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
