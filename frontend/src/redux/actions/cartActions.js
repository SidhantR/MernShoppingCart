// to make http request to our backend to get the product details 

import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id,qty) => async (dispatch , getState) => {
    // return a async function which hass access to dispatch function ----> use of redux
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type : actionTypes.ADD_TO_CART,
        payload : {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price : data.price,
            countInStock : data.countInStock,
            qty
        }
    })
    // save the cart to localstorage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart= (id) => (dispatch,getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    //update our localstorage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}