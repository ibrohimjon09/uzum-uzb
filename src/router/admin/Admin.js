import React from 'react'
import "./Admin.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import CreateProduct from './create-product/CreateProduct';
import ManageProduct from './manage-product/ManageProduct';

function Admin() {
  return (
    <div className='admin'>
      <Sidebar/>
      <div className='admin_content'>
      <Routes>
        <Route path='/create-product' element={<CreateProduct/>}/>
        <Route path='/manage-product' element={<ManageProduct/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Admin