import axios from "axios";
import { BASE_URl } from "../../config";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CommitteeDetails = () => {
    const [committee, setSingleCommittee] = useState([])
    const {id} = useParams()
    const {id:committeeId,nameEn, descriptionEn} = committee || {};
    const getEcCouncilDataDetails = async () =>{
        try {
            const res = await axios.get(`${BASE_URl}/api/committee-types/{id}?id=${id}`)
            setSingleCommittee(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getEcCouncilDataDetails()
    },[])
    
    return (
        <div>
            <div className="card">
                <h2>{committeeId}</h2>
                <h3>{nameEn}</h3>
                <p>{descriptionEn}</p>
            </div>
        </div>
    );
};

export default CommitteeDetails;