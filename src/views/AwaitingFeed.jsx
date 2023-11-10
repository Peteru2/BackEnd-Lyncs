import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "../components/useFetch";

import Pagination from '../components/Pagination';
import Funnel from "../images/FunnelSimple.svg"
import closeButton from "../images/forbidden-2.svg"
import airpod from "../images/airpod.png"
import user from "../images/User.svg"
import Succes from "../components/success";
import caretLeft from "../images/CaretDown.svg"
import ImageSlider from "../components/imageSlider";




const AwaitingFeed = () => {
    // const awaitingFeedList = [

    //     {
    //         sn: 1,
    //         deliveryId: "#65jyu",
    //         price: 123087,
    //         numOfItems: 5,
    //         view: "View"
    //     },
    //      {
    //         sn: 2,
    //         deliveryId: "#25jrt",
    //         price:68287,
    //         numOfItems: 6,
    //         view: "View"
    //     }, {
    //         sn: 3,
    //         deliveryId: "#75rtg",
    //         price: 237690,
    //         numOfItems: 1,
    //         view: "View"
    //     }, {
    //         sn: 4,
    //         deliveryId: "#48lhk",
    //         price: 79034,
    //         numOfItems: 8,
    //         view: "View"
    //     },
    // ]
    const {data } = useFetch('https://api.lyncs.africa/staff/merchant-feedback')
  
   

      const [currentPage, setCurrentPage] = useState(1);
      const [selectedView, setSelectedView] = useState(null)
      const [preview, setPreview] = useState(false)
      const [selectedMarchant, setSelectedMarchant] = useState(null)
      const [marchantOffer, setMarchantOffer] = useState(false)
      const [statement, setStatement] = useState('')
      const itemsPerPage = 10; // Number of items to display per page 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [
    {
        "deliveryId":"#94045",
        "price":"$60",
        "numOfItems":30,
        "view":"View",
        "img":[
                airpod,
                airpod,
                airpod,
 
        ],
        "prodName":"Airpod",
        "prodPrice":"$5909",
        "prodDescription":"The Apple AirPods 2nd Generation redefine the way you experience audio, setting new standards for wireless earbuds. With their iconic design, seamless connectivity, and unmatched sound quality, these earbuds are a true testament to Apple's commitment to innovation and user-centric technology.",
        "offer":[
            {
            "offerName":"Offer A",
            "marchantName":"Johnson Adams",
            "offerPrice": 129045,
            },
            {
                "offerName":"Offer B",
                "marchantName":"Olatt Adams",
                "offerPrice": 45045,
                },
            {
                    "offerName":"Offer A",
                    "marchantName":"Johnson Adams",
                    "offerPrice": 129045,
                    },
                    {
                        "offerName":"Offer B",
                        "marchantName":"Olatt Adams",
                        "offerPrice": 45045,
                        }
    ],

    },
    {
        "deliveryId":"#64025",
        "price":"$100",
        "numOfItems":90,
        "view":"View"
    },
    {
        "deliveryId":"#89064",
        "price":"$50",
        "numOfItems":50,
        "view":"View"
    },
    {
        "deliveryId":"#94045",
        "price":"$60",
        "numOfItems":30,
        "view":"View"
    },
    {
        "deliveryId":"#64025",
        "price":"$100",
        "numOfItems":90,
        "view":"View"
    },
    {
        "deliveryId":"#89064",
        "price":"$50",
        "numOfItems":50,
        "view":"View"
    },
    {
        "deliveryId":"#94045",
        "price":"$60",
        "numOfItems":30,
        "view":"View"
    },
    {
        "deliveryId":"#64025",
        "price":"$100",
        "numOfItems":90,
        "view":"View"
    },
    {
        "deliveryId":"#89064",
        "price":"$50",
        "numOfItems":50,
        "view":"View"
    },
    {
        "deliveryId":"#94045",
        "price":"$60",
        "numOfItems":30,
        "view":"View"
    },
    
  ];

  const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
  const [selectproceed, setSelectProceed] = useState(false)
  const handleView = (index) => {
    setSelectedView(index); 
    setPreview(true);
    
   }
   const handleSelect = (index) =>{
        setSelectedMarchant(index)
        setMarchantOffer(true)
   }
   const handlePreviewClose = () =>{
    setPreview(false);
    setSelectedView(null); 
    setSelectedMarchant(null)
    setMarchantOffer(false)



   }
   const handleSelectProceedAndClose = (index) => {
    setSelectProceed(index)

    if(index === 0){
        setMarchantOffer(false)
        setSelectedMarchant(null)
    }
    if(index === 1){
        setPreview(false);
    setSelectedView(null); 
    setSelectedMarchant(null)
    setMarchantOffer(false)
    }
    if(index === 2){
        setSelectProceed(null)
    }

   }
  
   useEffect(() => {
    if (selectedMarchant !== null) {
      setStatement(paginatedData[selectedView].offer[selectedMarchant].marchantName);
    }
  }, [selectedMarchant, selectedView, paginatedData]);

  
    return ( 
        <>
             <section>
                <div className="flex cont ">
                    <SideBar />
                        <section className="w-full mainPage">
                        <Navbar />
                        <div className="mx-6 my-4 ">
                                <section>
                                <div className="flex w-full mt-7">                       
                             <h3 className="text-2xl ">Overview</h3>
                             <div className="ml-auto">
                            <img src={Funnel} alt="funnel"/>
                        </div>
                        </div>
                                    <h2 className="my-3">Pending Deliveries</h2>
                                    <div className="w-full pendingOrder bg-white">
                                        {/* <img src={AirPod} alt="air" /> */}
                                    <table className="pendingList w-full">                       
                                        <th className="grid grid-cols-5 text-left text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                                    <tr>S/N</tr>
                                    <tr>Delivery Id</tr>
                                    <tr>Price</tr>
                                    <tr>Number of Items</tr>
                                    <tr >View</tr>
                        
                                        </th>
                                        {paginatedData.map((item, index) => {
                                                    const serialNumber = currentSerialNumber + index; 
                                                return(
                                                    <div key={index}>
                                                    <tbody  className="grid grid-cols-5  gap-3 border-b-2 h-14 px-2 text-xs items-center">

                                                           <td>{serialNumber}</td>
                                                           <td>{item.deliveryId}</td>
                                                           <td>{item.price}</td>
                                                           <td>{item.numOfItems}</td>
                                                           <td className="text_color cursor-pointer" onClick={()=>handleView(index)}>View</td>

                                                    </tbody>
                                                    
                                                    </div>
                                                )
                                            })
                                        }
                                       
                                        </table>

                                        <div className={`await_modal ${preview || selectproceed === 1 ? "modal-show":""}`}>
                                        {selectedView !== null && (
                                        <div className={selectproceed === 1?"hidden":"block"}>
                                            <div className="mb-32">
                                                    <div className="flex w-full">
                                                    <h3>Product Details</h3>
                                                    <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}>
                                                    <img src={closeButton} alt="closebutton" />
                                                    </div>
                                                    </div>
                                                    <h2 className="text-sm text-gray-400">See product information</h2>

                                                        <div className="flex justify-between gap-10 mt-4 ">
                                                    <div className="prodImg  w-full">
                                                    <ImageSlider imageSlides={paginatedData[selectedView].img} />
                                                    </div>
                                                    <div className="flex-col flex-container">
                                                        <h5 className="text-sm text-gray-400">Product Name</h5>
                                                        <h5 className=" text-black font-bold mt-2">{paginatedData[selectedView].prodName}</h5>
                                                        <h5 className="text-sm text-gray-400 mt-3">Price</h5>
                                                        <h5 className=" text-black font-bold mt-1">{paginatedData[selectedView].prodPrice}</h5>
                                                        <h5 className="text-sm text-gray-400 mt-3">Description</h5>
                                                        <p className="text-xs mt-2">
                                                        {paginatedData[selectedView].prodDescription}
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                                </div>

                                                <div className="h-44 flex justify-between flex-wrap overflow-y-scroll mt-20 scrollbar-style">
                                                    
                                                {paginatedData[selectedView].offer.map((item, index)=>(
                                                                       
                                                <div className="h-20 my-10" key={index}>      

                                                <div className="flex justify-between items-center">
                                                    <div className="mr-2">
                                                        <img src={user} alt ="user" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold">{item.offerName}</p>
                                                        <p className="text-xs my-2">Marchant's Name: {item.marchantName}</p>
                                                        <p className="text-xs my-2">Offer: {item.offerPrice}</p>
                                                    </div>
                                                </div>

                                                <button className="bg_color text-white rounded-md w-full text-sm py-1 mt-2 outline-none" onClick={()=>handleSelect(index)}>Select</button>
                                                </div>
                                                  

                                                ))}
                                                       
                                                       </div>
                                                      
                                            </div>

                                         )}
                                          
                                          <div className={selectproceed === 1?"block":"hidden"}>
                                                <Succes onClose={()=> handleSelectProceedAndClose(2)} 
                                                    statement ={` You have approved product sale to "${statement}"`}
                                                      />
                                                </div>
                                                   
                                        </div>
                                        <div className={`selectedMarchant_modal ${marchantOffer ? "select_modal-show":""}`}>
                                                    
                                                    {selectedMarchant !== null && ( 
                                                             <div className="">
                                                                 <p className="text_color cursor-pointer flex items-center" onClick={()=> handleSelectProceedAndClose(0)}><img src={caretLeft}  className="mr-1"alt="caretLeft" />  Back</p>
                                                                 <p className="my-4 font-bold text-sm">
                                                                     Are you sure you want to select {paginatedData[selectedView].offer[selectedMarchant].marchantName} with offer "N{paginatedData[selectedView].offer[selectedMarchant].offerPrice}"
                                                                 </p>
                                                                 <div className="w-full flex text-sm">
                                                                     <button className="text-white bg_color rounded-md w-24 py-1" onClick={()=> handleSelectProceedAndClose(1)} >Proceed</button>
                                                                     <button className="shadow-md  custom_border  rounded-md w-24 py-1 ml-auto" onClick={()=> handleSelectProceedAndClose(0)}>Cancel</button>
                                                                 </div>

                                                             </div>
                                                             
                                                    )}
                                       

                                         </div>
                                                
                                                    </div>
                                       
                                                    <div className={preview || selectproceed === 1?"overlay":""}></div>
                                                    <div className={marchantOffer ?"select_overlay":""}></div>
                                        {totalPages > 1 && (
                                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                                      )}  
                                </section>    
                        </div>
                        </section>
                        </div>
            </section>
        </>
     );
}
 
export default AwaitingFeed;