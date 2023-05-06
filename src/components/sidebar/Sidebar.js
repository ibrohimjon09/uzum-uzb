import React from 'react'
import "./Sidebar.css"
import { NavLink, useNavigate } from "react-router-dom";



function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className='sidebar'>
       <button className='go_to-home' onClick={()=> navigate("/")}>go home</button>
        <h2>Admin Dashboard</h2>
         <ul>
            <li>
                <NavLink className={"sideber_link"} to={"/admin/create-product"}>Create Product</NavLink>
            </li>
            <li>
                <NavLink className={"sideber_link"} to={"/admin/manage-product"}>Manage Product</NavLink>
            </li>
         </ul>
    </div>
  )
}

export default Sidebar