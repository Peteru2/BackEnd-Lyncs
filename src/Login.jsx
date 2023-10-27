import LoginImg from "./images/Frame 279.png"
// import Facebook from "./images/Facebook.svg"
// import Google from "./images/Google.svg"
import LoginForm from "./LoginForm";

const Login = () => {
    // {
    //     "email": "Tara83@gmail.com",
    //     "phone": "08145789783",
    //     "password": "Faith55"
    // }

    return ( 
        <>
            <section>
                <div className=" loginpage ">
                    
                    <div className="LoginPage1 pt-44 justify-center">
                        <div>
                            <img src={LoginImg} alt="loginImg" />
                        </div>
                        <div>
                            <div className="parentLoginStyle">
                                <div className="loginStyle1"></div>
                                <div className="loginStyle2"></div>

                            </div>
                        </div>
                    </div>
                    <div className="LoginPage2  items-center justify-center">
                        <div className="">
                            <h2 className="font-bold">Login to backend</h2>
                            <h2 className="text-gray-500 text-sm mt-1">Fill in the appropriate details</h2>

                            <div className="mt-6 w-full">
                                    <LoginForm />

                                    <p className="text-center text-sm mt-4">Don't have an account? <span className="text_color cursor-pointer">Sign Up</span></p>
                                    {/* <div className="flex items-center justify-between w-full mt-3">
                                        <div className="border-b-2 w-full"></div>
                                        <p className="font-bold text-sm mx-1">Or</p>
                                        <div className="border-b-2 w-full"></div>

                                    </div>
                                    <div className="flex justify-center mt-4">
                                            <div className="mx-2">
                                                <img src={Facebook} alt="Facebook" />
                                            </div>
                                            <div className="mx-2">
                                                <img src={Google} alt="Google" />
                                            </div>
                                    </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Login;