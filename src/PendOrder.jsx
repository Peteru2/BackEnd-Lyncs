import SideBar from "./SideBar";
import Navbar from "./Navbar";

// import Pod from "./images/airpod.png"
import closeButton from "./images/forbidden-2.svg"
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import clanMarchant from "./images/lyncsMarch.png"
import kongaMarchant from "./images/konga.png"
import Jiji from "./images/Jiji.png"
import Ali from "./images/ali.png"
import Success from "./images/success.png"
import MarketImg from "./MarketImg";
import Pagination from './Pagination';
import Funnel from "./images/FunnelSimple.svg"



const PendOrder = () => {
   
    
    const options = [
        {
          id: 1,
          name: 'Option 1',
          imageUrl: kongaMarchant
        },
        {
          id: 2,
          name: 'Option 2',
          imageUrl: Jiji
        },
        {
          id: 3,
          name: 'Option 3',
          imageUrl: Ali
        },
        // Add more options as needed
      ];

      const option = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "UTC", // Adjust the time zone as needed
};
    const [preview, setPreview] = useState(false)
    const [push, setPush] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [selectedDivIndex, setSelectedDivIndex] = useState(null);
    const [cont, setCont] = useState(false);
    const [success, setSuccess] = useState(false);

    const [pushWord, setPushWord] = useState("");

    const [otherMarch, setOtherMarch] = useState(false)
    const [isSelectionValid, setIsSelectionValid] = useState(false);

    

    
    const handleDivClick = (index) => {
        setSelectedDivIndex(index); 
        
        }

    const handlePreview = (itemIndex) =>{
        
        setSelectedItemIndex(itemIndex);
        setPreview(true);
    }

    const handlePreviewClose = () =>{
        setPreview(false);
        setPush(false)
        setOtherMarch(false)
        setSelectedDivIndex(null)
        setCont(false)
        setPushWord("Push")
        setIsSelectionValid(false)
        setSuccess(false)


        // setLastPush(false)

    }
    useEffect(() => {
        if (selectedDivIndex === 1) {
          setPushWord("Continue");
        } else {
          setPushWord("Push");
        }
       
      }, [selectedDivIndex]); 
     
      
      
      
      const handleSelectionChange = (hasSelection) => {
        setIsSelectionValid(hasSelection);
      }

      const handleAction = (itemIndex) =>{
        setSelectedItemIndex(itemIndex);
        setPreview(true);
        setPush(true);
        setCont(false)
      }
      
      const {data } = useFetch('https://api.lyncs.africa/staff/pending-orders')

      const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [];

  const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
 
      
    const handlePush = () =>{
                setPush(true)
                if(push === true){
                    if (selectedDivIndex === null){
                        alert("This is going to work")
                    }
                    else if(selectedDivIndex === 1){
                        setPushWord("Push")
                        setCont(true)
                        
                    }
                     if(isSelectionValid === true){
                        setSuccess(true)
                        setCont(false)
                        setPush(false)

                    }
                    if(success === true && push ===false){
                        setPushWord("Done")
                        setPreview(false);
                        setPush(false)
                        setOtherMarch(false)
                        setSelectedDivIndex(null)
                        setCont(false)
                        setIsSelectionValid(false)
                        setSuccess(false)

                    }
                   
                }
               
    }
   

    return ( 
        <>
        <section>
                <div className="flex cont ">
                <SideBar />
                    <section className="w-full mainPage">
                    <Navbar />
                    <div className="mx-6 my-4 ">
                        <div className="flex w-full mt-7">                       
                             <h3 className="text-2xl ">Overview</h3>
                             <div className="ml-auto">
                            <img src={Funnel} alt="funnel"/>
                        </div>
                        </div>

                        <h2 className="my-3">Pending Orders</h2>
                        <div className="bg-white pendingOrder  rounded-md">
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-8 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Source</p>
                        <p>Order Id</p>
                        <p>Created on</p>
                        <p>Number of Item</p>
                        <p>Order Category</p>
                        <p>View</p>
                        <p>Action</p>
                        </div>

                        
                        {paginatedData.map((item, index) => {
                                    const products = item.products[0]
                                    const serialNumber = currentSerialNumber + index; 
                                    // const orderProd = products.order_product;
                                    return (
                                        <>
                                    <div key={index}>
                                        <div className="grid grid-cols-8 gap-3 rounded-b-md border-b-2 h-14 px-2 text-xs items-center">
                                        <p>{serialNumber}</p>
                                        <p>{item.Product}</p>
                                        <p>{products.order_product.order_id}</p>
                                        <p>{new Date(products.order_product.createdAt).toLocaleString("en-US", option)}</p>
                                        <p>{products.order_product.quantity}</p>
                                        <p>{item.OrderCateg}</p>
                                        <p onClick={() => handlePreview(index)} className="text_color cursor-pointer">View</p>
                                        <p onClick={() => handleAction(index)} className="p-2 px-3 bg_color cursor-pointer rounded-md text-white w-20 text-center">Push</p>
                                        </div>
                                    </div>
                                    </>

                                        );
                                        })}
                        


                            <div className={`modal ${preview ? "modal-show":""}`}>                            
                                {selectedItemIndex !== null && (
                                    <div  key={selectedItemIndex} >
                                    <div  className={push || otherMarch || success?"hidden":"block"}>
                                    <div className="flex w-full">
                                        <h3>Pending Details</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                    </div>
                                    <h2 className="text-sm text-gray-400">See product information</h2>
                                    <div className="flex justify-between gap-10 mt-4 ">
                                        <div className="prodImg  w-full">
                                            <img src={data.data[selectedItemIndex].products[0].picture1} className="h-60" alt="airpod" />
                                        </div>
                                        <div className="flex-col flex-container">
                                            <h5 className="text-sm text-gray-400">Product Name</h5>
                                            <h5 className=" text-black font-bold mt-2">{data.data[selectedItemIndex].products[0].name}</h5>
                                            <h5 className="text-sm text-gray-400 mt-3">Price</h5>
                                            <h5 className=" text-black font-bold mt-1">{data.data[selectedItemIndex].products[0].price}</h5>
                                            <h5 className="text-sm text-gray-400 mt-3">Description</h5>
                                            <p className="text-xs mt-2">
                                            {data.data[selectedItemIndex].products[0].description}
                                            </p>
                                        </div>
                                    </div>
                                   

                                    </div>

                                        <div className={push  && !cont ? "block": "hidden"}>
                                            <div className="">
                                        <div className="flex w-full">
                                        <h3>Select where to push products</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">You can select multiple market place</h2>

                                    <div className="marchant  w-full mt-4 " >
                                            <div className={ selectedDivIndex === 0 ?" rounded-full lyncsImage" : "rounded-md lyncsImage "}>
                                                <h3>Clan Marchant</h3>
                                                <div className="mt-3 w-full justify-center ">
                                                    <img src={clanMarchant} alt="clanMarchant" onClick={ () =>handleDivClick(0)} className={selectedDivIndex ===0 ? "border-2 border-yellow-300":""} />
                                                </div>
                                            </div>
                                            <div className=  "KongaImage">
                                                <h3>Other Market</h3>
                                                <div className={ selectedDivIndex === 1 ? " border-2 border-yellow-300 img mt-3" :"img mt-3 border border-gray-300"} >
                                                    {/* {
                                                        selectedDivIndex === 1? setPushWord("Push"):setPushWord("Continue")
                                                    } */}
                                                <div className=" w-full flex justify-center ">
                                                    <img src={kongaMarchant} alt="KongaMarchant" onClick={ () =>handleDivClick(1)}  />
                                                </div>
                                                </div>
                                            </div>

                                           
                                            <div>
                                            </div>
                                           
                                    </div>
                                    
                                        </div>
                                        </div>

                                        <div className={cont? "block":"hidden"}>
                                            <div className="flex w-full">
                                        <h3>Select where to push products</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">You can select multiple market place</h2>

                                         <MarketImg options={options} onSelectionChange={handleSelectionChange}/>
                                        </div>
                                    
                                        <div className={success?"block":"hidden"}>
                                        <div className="flex w-full">
                                        <h3>Successful!</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">Your product has been pushed successfully to jumia and konga</h2>
                                            <div className="mt-4">

                                                        <img src={Success} alt="Success" />
                                            </div>
                                        </div>

                                        <div className="mt-12">
                                                <button onClick={handlePush} className="bg_color text-white p-2 rounded-md w-full">
                                                    {isSelectionValid ?
                                                    (
                                                        <h3>Push</h3>
                                                    ):
                                                    (
                                                    <h2>{pushWord}</h2>
                                                    )}
                                                </button>
                                            </div>

                                    </div>
                                    

                                     )}
                                </div>

                      
       
                      
                        </div>
  
                    </div>      
                    {totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}
                    </div>
                            <div className={preview?"overlay":""}></div>
                    </section>
                </div>

                        
                </section>
        </>
     );
}
 
export default PendOrder;