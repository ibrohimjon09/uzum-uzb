import React from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";


function Home() {
    const [data, setData] = React.useState([])
    const productRef = collection(db, "products")


    React.useEffect(() => {
       const fetchData = async()=>{
        const getData = await getDocs(productRef)
        setData(getData.docs.map(i => ( {...i.data(), id: i.id} )))
       }
       fetchData()
    }, [])
    return (
        <div>
            <Banner />
            <Products admin={false} data={data} />
        </div>
    )
}

export default Home