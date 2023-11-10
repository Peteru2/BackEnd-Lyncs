import X from './images/X.svg'
import camera from "./images/CameraPlus.svg"
import Succes from "./success";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RegForm = ({showForm, setShowForm,setModalForm, modalForm}) => {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    image: null, // Use null as the initial value for the image
  });
const [showSuccessComp, setShowSuccessComp] = useState(false)


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
    
    

    return ( 
        <>
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
                                    <div className="my-2">
                                        <label className="font-bold ">First Name</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-1 px-2">
                                            <input type="text" 
                                            className="w-full outline-none"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">Last Name</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-1 px-2">
                                            <input type="text" 
                                            className="w-full outline-none"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">Email</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-1 px-2">
                                            <input 
                                            className="w-full outline-none"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">Phone Number</label>
                                        <div className="border-2 w-full mt-1  rounded-lg py-1 px-2">
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
                                    <div className="my-2">      
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
                                    <h2 className="h-2 w-2 rounded-full bg_color mx-2"></h2>
                                    <h4 className="text-sm">2 seconds left</h4>
                                    <div className="ml-auto">
                                     <p>30%</p>
                                    </div>
                                  </div>
                              </div>

                              </div>
                                <div className="mt-10 ">
                                    <button type="submit" className="bg_color w-full rounded-lg py-2 text-center text-white">Create</button>
                                </div>
                                </form>
                                </div>
                                </div>
                                <div className={showSuccessComp?"block": "hidden"}>
                                <Succes onClose ={handleCloseForm} statement={`You have activated "${formData.firstName +" "+ formData.lastName}" successfully`}/>
                                </div>
                             </div>
                            <div className={showForm?"overlay":""}></div>
                                
                        <ToastContainer />
                                    
        </>
     );
}
 
export default RegForm;