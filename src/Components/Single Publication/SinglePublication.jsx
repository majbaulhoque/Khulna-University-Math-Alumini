import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URl } from "../../config";
import { useParams } from "react-router-dom";

const SinglePublication = () => {
    const [publicationsData, setPublicationsData] = useState([]);
    const {id} = useParams();
    const { title, publicationDate, publicationType, journalName, conferenceName, volumeNumber, issueNumber, pageNumbers, description, isActive, createdBy, updatedBy, createdAt, updatedAt } = publicationsData || {};

    console.log(publicationsData)

    const getPublicationsData = async () =>{
        
        try {
            const res = await axios.get(`${BASE_URl}/api/publications/{id}?id=${id}`)
            console.log(res.data);
            setPublicationsData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getPublicationsData()
    },[])

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{publicationDate}</h3>
                <p><strong>{publicationType}</strong></p>
                <p><strong>{journalName}</strong></p>
                <p><strong>{conferenceName}</strong></p>
                <p>{issueNumber}</p>
            </div>
        </div>
    );
};

export default SinglePublication;