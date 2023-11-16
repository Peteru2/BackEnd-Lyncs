import closeButton from "../assets/images/forbidden-2.svg"
import Success from "../assets/images/success.png"
const Succes = ({onClose, statement}) => {

    return ( 
        <>
            <section>
                                    <div className="flex w-full ">
                                        <h3>Successful!</h3>
                                        <div className="ml-auto cursor-pointer" onClick={onClose}><img src={closeButton} alt="closebutton" /></div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">{statement && <div>{statement}</div>}</h2>
                                            <div className="mt-4 flex justify-center">

                                                        <img src={Success} alt="Success" />
                                     </div>
                                     <div className="w-full">
                                        <button className="text-white bg_color rounded-md w-full text-center py-2 mt-1 " onClick={onClose}>Done</button>
                                     </div>
                </section>
        </>
     );
}
 
export default Succes;