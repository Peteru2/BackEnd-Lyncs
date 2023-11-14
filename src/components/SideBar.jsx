import React from 'react'
import loggo from  "../images/logo.png"
import  DashSideIcon from "../images/DashSideIcon.jsx"
import PendOrderSideIcon from "../images/ShoppingCartSimple2.jsx"
import PendDiliSideIcon from "../images/Truck2.jsx"
import AwaitSideIcon from "../images/Alarm2.jsx"
import ClosedSideIcon from "../images/CalendarX2.jsx"
import StaffSideIcon from "../images/UsersFour2.jsx" 
import { useAuth } from './AuthContext';


import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
    const { logout } = useAuth();

    const navSideList = [
        {
            title: "Dashboard",
            url: "/",
            icon1: <DashSideIcon />,
        },
        {
            title: "Pending Orders",
            url: "/Pending",
            icon1: <PendOrderSideIcon />
            
        },
        {
            title: "Pending Deliveries",
            url: "/Pend-Deliveries",
            icon1: <PendDiliSideIcon />
            
        },
        {
            title: "Awaiting Feedbacks",
            url: "/Awaiting-Feedback",
            icon1: <AwaitSideIcon />
           
        },
        {
            title: "Closed Deliveries",
            url: "/Closed-Deliveries",
            icon1: <ClosedSideIcon />
            
        },
         {
            title: "Staff",
            url: "/Staff",
            icon1: <StaffSideIcon />,
           
        },

    ]
    const location = useLocation()

    const handleLogout = () =>{
       logout()
    }
    
    return ( 
        <>
            <aside className="bg-white sideBar border-r-2">
                    <div className="p-4  border-b-2 flex h-16 justify-center">
                        <img src={loggo} alt="logo" />
                    </div>

            <div>
                <div className=" text-gray-500 mt-12">
                    {navSideList.map((item,index) =>{
                        const isActive = location.pathname === item.url;
                        return(
                    <div key={index} className={`flex text-sm pl-6 my-6 py-2 cursor-pointer  ${location.pathname === item.url ? "Sidebar-border" :""} `}>
                      <Link to={item.url} className="flex items-center outline-none"> 
                      <p className='mr-5'>{React.cloneElement(item.icon1, { isActive: isActive })}</p>
                      <p className={location.pathname === item.url ? "text_color" :"red"}>{item.title}</p></Link>
                    </div>

                    )
                })
                }
                </div>
            </div>
            <div className=" text-gray-500 logout border-t-2 py-6">
                   
             <button className="text-sm ml-6" onClick={handleLogout}>
               <i className="fa fa-sign-out mr-5 "></i> <span className="">Logout</span>
             </button>
            </div>
            </aside>
        </>
     );
}
 
export default SideBar;