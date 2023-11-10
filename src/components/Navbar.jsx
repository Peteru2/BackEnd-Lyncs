// import ProImg from "./images/ProImg.svg"
import ProImg from "../images/fullImgProf.jpg"
import { useSearch } from './SearchContext';
const Navbar = () => {

    const { searchQuery, setSearchQuery } = useSearch(); 
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
    return ( 
        <>
            <nav className="bg-white w-full h-16 flex items-center border-b-2 px-6">
                <div>
                   <div className="border-2 border-gray-100 py-1 rounded-md px-2 my-3 w-96  flex">
                    <i className="fa fa-search  text-gray-500 mr-2 mt-1"></i>
                    <input type="text" placeholder="Search" className="outline-none w-full "/>                 
                      </div>
                </div>
                <div className="ml-auto flex  items-center">
                        <div className="mr-4">
                            <i className="fa fa-bell font-bold text-black"></i>
                        </div>
                        <div className="">
                        <img src={ProImg} alt="profileImage"
                         className="fa fa-bell text-black mr-4 w-8 h-8  rounded-full"
                         value={searchQuery} 
                         onChange={handleSearchQueryChange}
                         />
                        </div>
                        <p className="mr-2">Nebuchi Nwadiogbu</p>
                </div>
            </nav>
        </>
     );
}

export default Navbar;