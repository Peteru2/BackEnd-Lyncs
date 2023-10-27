import { useState,useEffect } from "react";
import axios from 'axios'



const useFetch = (url) => {
const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request to the API
        axios.get(url)
      
        .then((response) => {

            // Handle the successful response
            setData(response.data.data);
            console.log(response.data.data)
           
                    })
        .catch((error) => {
            // Handle errors
            console.log(error.message)
            console.error('Error fetching data:', error);
        });
    }, [url]);
    return {data}
}
export default useFetch