import loggo from  "../images/logo.png"
import DashIcon1 from "../images/category.svg"
import DashIcon2 from "../images/element-3.svg"
import PendOIcon1 from "../images/ShoppingCartSimple2.svg"
import PendOIcon2 from "../images/ShoppingCartSimple.svg"
import PendDIcon1 from "../images/Truck2.svg"
import PendDIcon2 from "../images/Truck.svg"
import AwaitIcon1 from "../images/Alarm2.svg"
import AwaitIcon2 from "../images/Alarm.svg"
import ClosedIcon1 from "../images/CalendarX2.svg"
import ClosedIcon2 from "../images/CalendarX.svg"
import user1 from "../images/UsersFour2.svg" 
import user2 from "../images/UsersFour.svg" 
import { useAuth } from './AuthContext';


import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
    const { logout } = useAuth();

    const navSideList = [
        {
            title: "Dashboard",
            url: "/",
            icon1: DashIcon1,
            icon2: DashIcon2
        },
        {
            title: "Pending Orders",
            url: "/Pending",
            icon1: PendOIcon1,
            icon2: PendOIcon2
        },
        {
            title: "Pending Deliveries",
            url: "/Pend-Deliveries",
            icon1: PendDIcon1,
            icon2: PendDIcon2
        },
        {
            title: "Awaiting Feedbacks",
            url: "/Awaiting-Feedback",
            icon1: AwaitIcon1,
            icon2: AwaitIcon2
        },
        {
            title: "Closed Deliveries",
            url: "/Closed-Deliveries",
            icon1: ClosedIcon1,
            icon2: ClosedIcon2
        },
         {
            title: "Staff",
            url: "/Staff",
            icon1: user1,
            icon2: user2
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
                        return(
                    <div key={index} className={`flex text-sm pl-6 my-6 py-2 cursor-pointer  ${location.pathname === item.url ? "Sidebar-border" :""} `}>
                      <Link to={item.url} className="flex items-center outline-none">  { location.pathname=== item.url ? (<img src={item.icon1} alt="l" className="fa fa-dashbord mr-5 "/>) :(<img src={item.icon2} alt="l" className="fa fa-dashbord mr-5 "/>)}<p className={location.pathname === item.url ? "text_color" :""}>{item.title}</p></Link>
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