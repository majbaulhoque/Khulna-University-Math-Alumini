import { useEffect, useState } from "react";
import { BASE_URl } from "../../config";
import axios from "axios";



const Publication = () => {

    const [publication,setPublication] = useState([]);
    const [isError, setIsError] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let id =5;
    //         try {
    //             let res = await axios.get(`${BASE_URl}/publications/{id}?id=${id}`, { withCredentials: true });
    //             console.log(res.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const getPublicationsData = async () => {
        try {
            let res = await axios.get(`${BASE_URl}/publications`);
            console.log(res.data);
            setPublication(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getPublicationsData();
    }, []);
    
    return (
        <div>
            <h3>This is Publication page</h3>
        </div>
    );
};

export default Publication;