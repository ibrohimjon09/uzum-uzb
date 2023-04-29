import React, { useState, useRef } from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart, decFromCart, deleteAllCart, removeFromCart } from '../../context/action/action'


const TOKEN = "5847573840:AAE7rp0SJNTemDxBfBp7EPgLnurwmax_BIU"
const CHAT_ID = "626161549"
// https://api.telegram.org/bot[bot_token]/sendMessage?chat_id=[chat_id]
// https://api.telegram.org/bot5847573840:AAE7rp0SJNTemDxBfBp7EPgLnurwmax_BIU/getUpdates

function Cart({ cart }) {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const tel = useRef()
    const address = useRef()


    const handleSend = (e) => {
        e.preventDefault()
        let text = "<i>Buyurtma  %0A %0A</i>"
        text += `Ism: <b>${name}</b> %0A`
        text += `Tel: ${tel.current.value} %0A`
        text += `Manzil: ${address.current.value} %0A%0A`


        cart.forEach((i) => {
            text += `Nomi: ${i.title}%0A`
            text += `Soni: ${i.soni}%0A`
            text += `Narxi: ${i.price}%0A%0A`
        })

        setTimeout(()=>{
            setName("")
            tel.current.value = ""
            address.current.value = ""
            
            dispatch(deleteAllCart())
        }, 3000)
        
        

        text += `Jami summa: <b>${cart?.reduce((a,b) => a + (b.soni * b.price), 0)} so'm</b>`

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
    }
    return (
        <div className='cart container'>
            <div className="cart__body">
                {
                    (cart.slice(0, 5))?.map(e => (
                        <div key={e.id} className="cart__card">
                            <div className="cart__left">
                                <img src={e.url} alt={e.title} />
                                <div className="cart__card-about">
                                    <h3>{e.title}</h3>
                                    <div className='cca__btm'>
                                        <h4>Sotuvchi: Hamidullaev Ibrokhim</h4>
                                        <div className="cart__card-num">
                                            <button
                                                onClick={() => dispatch(addToCart(e))}
                                                className="cart__num-btn">+</button>
                                            <span>{e.soni}</span>
                                            <button
                                                onClick={() => e.soni <= 1 ? dispatch(removeFromCart(e)) : dispatch(decFromCart(e))}
                                                className="cart__num-btn">-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__card-form">
                                <button onClick={() => dispatch(removeFromCart(e))} className="card__form-btn"><BsTrash3 /></button>
                                <h3>{e.price * e.soni} so'm</h3>
                                <del>{(e.price * e.soni) * 1.25}</del>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="cart__form">
                <h3 className="cart__form-title">RASMIYLASHTIRISH</h3>
                <div className="cart__form-products">
                    <div className="cart__form-productsItem">
                        <p>Mahsulotlar soni:</p>
                        <p>{cart.reduce((a, b) => a + b.soni, 0)} ta</p>
                    </div>
                    <div className="cart__form-productsItem">
                        <p>Jami:</p>
                        <p>{cart.reduce((a, b) => a + (b.soni * b.price), 0)} so'm</p>
                    </div>
                </div>
                <form onSubmit={handleSend}>
                    <input required value={name} onChange={e => setName(e.target.value)} type="text" className='cart__form-inp' placeholder='Ismingiz' />
                    <input required ref={tel} type="number" placeholder='Telefon raqam' className='cart__form-inp' />
                    <input required ref={address} type="text" placeholder='Manzilingiz' className='cart__form-inp' />
                    <button  className="cart__form-btn">RASMIYLASHTIRISH</button>
                </form>
            </div>
        </div>
    )
}

export default Cart