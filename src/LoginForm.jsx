import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { useAuth } from './AuthContext';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    
    const navigate = useNavigate()

    console.log(loggedIn);

    const { login } = useAuth();
    // console.log(isAuthenticated)
   
    

    const handleSubmit = async (e) => {

      e.preventDefault();

      console.log(password);
      console.log(email);
      // console.log("This is not working")
  
      // Perform API call here and check login
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if (!email.trim()) {
                 
                  toast.error("Email is required!!", {
                    position: toast.POSITION.TOP_CENTER,
                  });               
                } else if (!emailRegex.test(email)) {

                  toast.error("Invalid Email Format", {
                    position: toast.POSITION.TOP_CENTER,
                  }); 
                }
     
      else if(password === ""){
        
        toast.error("Password cannot be empty cannot be Empty", {
          position: toast.POSITION.TOP_CENTER,
        }); 
        
      }
      else{
      axios({
        method: 'post',
        url: 'https://api.lyncs.africa/staff/login',
        data: {
          email: email,
          password: password
        }
      })
      .then((response) =>{
              console.log(response.data)
              setTimeout(() => {
              navigate('/');
                
              }, 2000);
              setLoggedIn(true);
              login();
              toast.success(response.data.message, {
                position: toast.POSITION.TOP_CENTER,
              }); 
      })
      .catch((err)=>{
        console.log(err)
       
            toast.error(err.message, {
              position: toast.POSITION.TOP_CENTER,
            }); 
      })

      }
      
    };

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-sm font-bold mb-2">Email</label>
                                        <div className="border-2 p-1 rounded-md">
                                            <input type="text"  
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                             className="w-full outline-none px-2 text-sm"/>
                                        </div>
                                    </div>

                                    <div className="mt-4 w-full">
                                        <label className="text-sm font-bold mb-2">Password</label>
                                        <div className="border-2 py-1  rounded-md">
                                            <input type="password"   
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full outline-none px-2 text-sm"/>
                                        </div>
                                        <div className="w-full flex justify-right">
                                                <p className="ml-auto text_color text-xs mt-2 ">Forget password?</p>
                                        </div>

                                    </div>
                                    <div className="mt-12">
                                        <button type="submit" className="text-center w-full p-2 text-white bg_color rounded-md outline-none">Login</button>
                                    </div>
                
                                    </form>
                                   
                                    <ToastContainer />
        </>
     );
}
 
export default LoginForm;