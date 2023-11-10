import SideBar from "./SideBar";
import Navbar from "./Navbar"
import "./style.css"

const OverView = () => {
    return ( 
        <>
            <div className="flex cont">
            <SideBar />
            <Navbar />
            </div>
        </>
     );
}
 
export default OverView
