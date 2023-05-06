import React, {useState} from 'react'
import "../Admin.css"
import Product from '../../../components/products/Products'
import { db } from "../../../server";
import { collection, getDocs } from "firebase/firestore";

function ManageProduct() {
  const [data, setData] = React.useState([])
    const productRef = collection(db, "products")
    const [refresh, setRefresh] = useState()


    React.useEffect(() => {
       const fetchData = async()=>{
        const getData = await getDocs(productRef)
        setData(getData.docs.map(i => ( {...i.data(), id: i.id} )))
       }
       fetchData()
    }, [])
 
  return (
    <div className='manage-product'>
        <h3>ManageProduct</h3>
        <Product admin={true} data={data} />
    </div>
  )
}

export default ManageProduct