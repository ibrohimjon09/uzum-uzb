import React from 'react'
import './Products.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import { addToHeart, addToCart, removeFromHeart } from '../../context/action/action'
import { db } from "../../server";
import { deleteDoc, doc } from "firebase/firestore";

function Products({ data, admin, setRefresh }) {

    const dispatch = useDispatch()
    const heart = useSelector(s => s.heart)
    
    const handleDeletePro = async(id) => {
        if (window.confirm("are you sure")) {
            await deleteDoc(doc(db, "products", id))
            .then()
            .catch()
            .finally(()=> setRefresh(p => !p))
            
        }
    }

    return (
        <div className='products container'>
            {
                data?.map(item => (
                    <div className="pro__card" key={item.id}>
                        <div className="pro__img">
                            <Link to={`/product/${item.id}`} state={item}>
                                <img src={item.url} alt={item.title} />
                            </Link>
                            {
                                !admin?
                                heart?.some(i => i.id === item.id) ?
                                    <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} />
                                    :
                                    <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
                                    :<></>
                            }
                        </div>
                        <div className="pro__body">
                            <div className="pro__card-title">{item.title.length > 55 ? (item.title.slice(0, 55) + '...') : item.title}</div>
                            <span className='pro__card-monthly'>{Math.round(item.price * 1.5 / 12)} USD/oyiga</span>
                            <div className="pro__card-price">
                                <div>
                                    <del>{item.price * 1.2} USD</del>
                                    <p>{item.price} USD</p>
                                </div>
                                {
                                    admin?
                                    <button onClick={() => handleDeletePro(item.id)} className='pro__card-shopping'>
                                      <FaTrash />
                                    </button> :
                                    <button onClick={() => dispatch(addToCart(item))} className='pro__card-shopping'>
                                       <AiOutlineShoppingCart />
                                    </button>
                                }
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products