import SideBar from "./SideBar";
import Navbar from "./Navbar"
// import useFetch from "./useFetch";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Pagination from './Pagination';
import { useState, useEffect } from "react";
import axios from 'axios' 
import X from './images/X.svg'
import camera from "./images/CameraPlus.svg"
import Succes from "./success";


const Staff = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    image: null, // Use null as the initial value for the image
  });
const [showForm, setShowForm] = useState(false)
const [modalForm, setModalForm] = useState(false)
const [showSuccessComp, setShowSuccessComp] = useState(false)
const handleShowForm = () =>{
    setShowForm(true)
    setModalForm(true)
}

const handleCloseForm = () =>{
    setShowForm(false)
    setShowSuccessComp(false)
}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  setShowSuccessComp(true)
    if(formData.firstName.trim() === ''){
        toast.error("First Name is required", {
            // position: toast.POSITION.TOP_CENTER,
          })
    }
    else if(formData.lastName.trim() === ''){
        toast.error("First Name is required", {
            // position: toast.POSITION.TOP_CENTER,
          })
    }
    
            else if (!formData.email.trim()) {
                    toast.error("Email is required", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                } else if (!emailRegex.test(formData.email)) {
                    toast.error("Invalid Email Format", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                }
               
                else if (!formData.phoneNumber.trim()) {
                    toast.error("Phone number is required", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                } else if (!phoneRegex.test(formData.phoneNumber)) {
                    toast.error("Invalid phone number format", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                }
                else if (formData.image === null)  {
                      toast.error("Image is required", {
                          position: toast.POSITION.TOP_CENTER,
                        })
                      }
                
    const url = 'https://api.lyncs.africa/staff/register';

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post(url, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
    
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

                             <div className={` ${showForm? "modal-show": ""} reg_modal `}>
                              <div className={showSuccessComp? "hidden":"block"}>
                                <div className="flex w-full">
                                <h3 className="font-bold">Create new staff</h3>
                                <div onClick={handleCloseForm} className="ml-auto cursor-pointer">
                                    <img src={X} alt="x" />
                                </div>
                                
                                </div >
                                <div className={`${modalForm? "block" :"hidden"}`}>
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="my-3">
                                        <label className="font-bold ">First Name</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-2 px-2">
                                            <input type="text" 
                                            className="w-full outline-none"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label className="font-bold ">Last Name</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-2 px-2">
                                            <input type="text" 
                                            className="w-full outline-none"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label className="font-bold ">Email</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-2 px-2">
                                            <input 
                                            className="w-full outline-none"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label className="font-bold ">Phone Number</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-2 px-2">
                                            <input 
                                            className="w-full outline-none"
                                            type="tel"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                // required
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">      
                                        <label className="font-bold ">Upload Picture</label>                             
                                        <label className="mt-2 w-20 flex justify-center cursor-pointer bg_color h-20 rounded-lg items-center ">
                                        <img src={camera} alt="camera"/>
                                       
                                            <input 
                                            className="hidden"
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            />
                                      
                                       
                                    </label>
                                    </div>
                              <div className="flex rounded-lg custom_border p-2">
                              <div className="mr-2 bg_color flex items-center">
                                <img src={camera} alt="cam" />
                              </div>
                              <div className="w-full">
                                  <div className="flex">
                                    <h2>Stephenie.jpg</h2>
                                    <div className="ml-auto">
                                      <i className="fa fa-heart mr-2"></i>
                                      <i className="fa fa-heart"></i>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    <h2>2.43MB </h2>
                                    <h2 className="h-2 w-2 rounded-full bg-white mx-2"></h2>
                                    <h4 className="text-sm">2 seconds left</h4>
                                    <div className="ml-auto">
                                     <p>30%</p>
                                    </div>
                                  </div>
                              </div>

                              </div>
                                <div className="mt-14 ">
                                    <button type="submit" className="bg_color w-full rounded-lg py-2 text-center text-white">Create</button>
                                </div>
                                </form>
                                </div>
                                </div>
                                    
                                <div>
                                </div>
                                <div className={showSuccessComp?"block": "hidden"}>
                                <Succes onClose ={handleCloseForm} statement={`You have activated "${formData.firstName +" "+ formData.lastName}" successfully`}/>
                                </div>
                             </div>
                            <div className={showForm?"overlay":""}></div>

                        </div>

                        </section>
                        <ToastContainer />

                        </div>
                        </section>

        </>
     );
}
 
export default Staff;