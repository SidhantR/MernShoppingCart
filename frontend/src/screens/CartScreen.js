import React from 'react'
import './CartScreen.css'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

//Component
import CartItem from '../components/CartItem'

//Action
import {addToCart} from '../redux/actions/cartActions'
import {removeFromCart} from '../redux/actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart

    const qtyChangeHandler=(id, qty)=> {
        dispatch(addToCart(id,qty))
    }
    const removeCartHandler =(id)=> {
        dispatch(removeFromCart(id))
    }
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty , 0)
    }
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => Number(item.price * item.qty) + price , 0)
    }
    
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shooping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart is empty <Link to="/">Go Back to Home Page</Link>
                    </div>
                ): cartItems.map( item => (
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeCartHandler={removeCartHandler} />
                ))}
                
            </div>
            <div className="cartscreen__right">
                <div className="cart__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
