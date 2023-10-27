import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useState } from "react";
import useFetch from "./useFetch";

import Pagination from './Pagination';
import Funnel from "./images/FunnelSimple.svg"


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
  const itemsPerPage = 10; // Number of items to display per page

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
                        <div className="mx-6 my-4 ">
                                <section>
                                <div className="flex w-full mt-2">                       
                             <h3 className="text-2xl mt-2">Overview</h3>
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
                                                           <td className="text_color cursor-pointer">{item.view}</td>

                                                    </tbody>
                                                    </div>
                                                )
                                            })
                                        }
                                       
                                        </table>
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