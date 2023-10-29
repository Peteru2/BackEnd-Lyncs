import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useState } from "react";
import useFetch from "./useFetch";

import Pagination from './Pagination';
import Funnel from "./images/FunnelSimple.svg"
import closeButton from "./images/forbidden-2.svg"



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
  const itemsPerPage = 10; // Number of items to display per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [
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
    }
  ];

  const marchants = [
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
  ] 
  const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
  const handleView = (index) => {
    setSelectedView(index); 
    setPreview(true);
    
   }
   const handlePreviewClose = () =>{
    setPreview(false);

   }
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
                                    <div className="w-full pendingOrder ">
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
                                                           <td className="text_color cursor-pointer" onClick={()=>handleView(index)}>{item.view}</td>

                                                    </tbody>
                                                    
                                                    </div>
                                                )
                                            })
                                        }
                                       
                                        </table>

                                        <div className="await_modal">
                                                <div className="flex w-full">
                                                        <h3>Product Details</h3>
                                                <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}>
                                                    <img src={closeButton} alt="closebutton" />
                                                </div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">See product information</h2>
                                        <div className="flex justify-between gap-10 mt-4 ">
                                        <div className="prodImg  w-full">
                                            <img src={data.data[selectedItemIndex].products[0].picture1} alt="airpod" />
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

                                        </div>
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