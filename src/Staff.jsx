import SideBar from "./SideBar";
import Navbar from "./Navbar"
// import useFetch from "./useFetch";
import Pagination from './Pagination';
import { useState, useEffect } from "react";
import axios from 'axios' 
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import RegForm from "./RegForm";


const Staff = () => {
const [modalForm, setModalForm] = useState(false)
const [showForm, setShowForm] = useState(false)


  const handleShowForm = () =>{
    setShowForm(true)
    setModalForm(true)
}

  const [data, setData] = useState([]);

  useEffect(() => {
      // Make a GET request to the API
      axios({
          method: 'get',
          url: 'https://api.lyncs.africa/staff/register',
        })
        .then((response) =>{
          setData(response.data)
                console.log(response.data)
              
                toast.success(response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                }); 
        })
        .catch((err)=>{
          console.log(err)
         
              toast.error(err, {
                position: toast.POSITION.TOP_CENTER,
              }); 
        })
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10; 

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [];

const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
 
    return ( 
        <>
             <section>
                <div className="flex cont ">
                <SideBar />
                <section className="w-full mainPage">
                <Navbar />
            
                    <div className="mx-6 my-4">
                        <div className="flex w-full mt-7 ">
                        <h4 className="text-2xl font-bold">Staff</h4>
                        <button onClick={handleShowForm} className="bg_color rounded-lg ml-auto w-32 text-white  text-center  text-sm"><i className="fa fa-plus mr-2"></i> Add new staff</button>
                        </div>
                        <div className="bg-white pendingOrder  mt-7">
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-6 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Name</p>
                        <p>Gender</p>
                        <p>Track</p>
                        <p>Phone Number</p>
                        <p>Delivery time</p>
                        
                        </div>

                        {paginatedData.map((item, index) => {
                             const serialNumber = currentSerialNumber + index;
                        return (
                            
                            <div key={index}>
                            <div  className="grid grid-cols-6  gap-3 border-b-2 h-14 px-2 text-xs items-center">
                            <p>{serialNumber}</p>
                            <p>{item.marchant.name}</p>
                            {/* <p>{products.order_id}</p> */}
                            <p className="">{item.customer.name}</p>
                            <p>{item.ProductAvailableOn}</p>
                            <p>{item.delivered_at}</p>

                            
                            </div>
                            </div>
                            )})}
                        </div>
                      
                        </div>
                        {totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}  

                       <RegForm handleShowForm={handleShowForm} showForm={showForm} setShowForm={setShowForm} setModalForm={setModalForm} modalForm={modalForm}/>
                        </div>

                        </section>
                        <ToastContainer />

                        </div>
                        </section>

        </>
     );
}
 
export default Staff;