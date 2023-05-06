import React, {useRef, useState} from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore";

function CreateProduct() {
  const title = useRef()
  const price = useRef()
  const url = useRef()
  const [loading, setLoading] = useState(false)

  const productRef = collection(db, "products")

  const handleCreate = async(e) => {
    e.preventDefault()
    let newPro = {
      title: title.current.value,
      price: +price.current.value,
      url: url.current.value,
    }
       await addDoc(productRef, newPro)
       .then(res => {
        console.log(res)

         title.current.value = ""
         price.current.value = ""
         url.current.value = ""
       })
       .catch(res => console.log(res))
       .finally(()=> setLoading(false))
 }
  return (
    <div className='create-product'>
        <h2>CreateProduct</h2>
        <form onSubmit={handleCreate} action="">
           <input ref={title} type="text" placeholder='title'/>
           <input ref={price} type="number" placeholder='price'/>
           <input ref={url} type="text" placeholder='url'/>
           <button type='submit' disabled={loading}>{loading ? "Loading" : "Create Product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct