import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

import useFetch from "../components/useFetch";
import Pagination from '../components/Pagination';
import Funnel from "../images/FunnelSimple.svg"

import {  useState } from "react";


// import { useSearch } from './SearchContext';
const PendDeliveries = () => {
    const {data } = useFetch('https://api.lyncs.africa/staff/pending-deliveries')
  
   

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
                        <div className="mx-6 my-4 ">
                        <div className="flex w-full mt-7">                       
                             <h3 className="text-2xl">Overview</h3>
                             <div className="ml-auto">
                            <img src={Funnel} alt="funnel"/>
                        </div>
                        </div>
                        <h2 className="my-3">Pending Deliveries</h2>
                        <div className="bg-white pendingOrder ">
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-6 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Marchants</p>
                        <p>Delivery Id</p>
                        <p className="col-span-2">Delivered Product</p>
                        <p>Product Available On</p>
                        
                        </div>

                        {paginatedData.map((item, index) => {
                             const serialNumber = currentSerialNumber + index; 
                        return (
                            
                            <div key={index}>
                            <div  className="grid grid-cols-6  gap-3 border-b-2 h-14 px-2 text-xs items-center">
                            <p>{serialNumber}</p>
                            <p>{item.Marchants}</p>
                            <p>{item.DeliveryId}</p>
                            <p className="col-span-2">{item.DeliveredProduct}</p>
                            <p>{item.ProductAvailableOn}</p>
                           
                            </div>
                            </div>
                            )})}

</div>
</div>
{totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}  
                            </div>
                            </section>
                    </div>
            </section>
        </>
     );
}
 
export default PendDeliveries;