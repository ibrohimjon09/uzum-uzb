import {
    ADD_TO_HEART,
    ADD_TO_CART,
    DEL_FROM_CART,
    DEL_FROM_HEART,
    DEC_FROM_CART,
    DELETE_ALL_CART
} from "./actionType"

export const addToHeart = (payload) => {
    return { type: ADD_TO_HEART, payload }
}

export const addToCart = (payload) => {
    return { type: ADD_TO_CART, payload }
}

export const removeFromHeart = (payload) => {
    return { type: DEL_FROM_HEART, payload }
}

export const removeFromCart = (payload) => {
    return { type: DEL_FROM_CART, payload }
}



export const decFromCart = (payload) => {
    return { type: DEC_FROM_CART, payload }
}

export const deleteAllCart = () => {
    return { type: DELETE_ALL_CART }
}

