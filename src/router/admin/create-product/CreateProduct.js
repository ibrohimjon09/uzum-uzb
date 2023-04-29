import React, {useRef} from 'react'
import "../Admin.css"

function CreateProduct() {
  const title = useRef()
  const price = useRef()
  const url = useRef()

  const handleCreate = (e) => {
    e.preventDefault()
    let newPro = {
      title: title.current.value,
      price: +price.current.value,
      url: url.current.value,
    }
    console.log(newPro);
  }
  return (
    <div className='create-product'>
        <h2>CreateProduct</h2>
        <form action="">
           <input type="text" placeholder='title'/>
           <input type="number" placeholder='price'/>
           <input type="text" placeholder='url'/>
           <button type='submit'>Create product</button>
        </form>
    </div>
  )
}

export default CreateProduct