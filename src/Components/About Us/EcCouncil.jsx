import axios from "axios";
import { BASE_URl } from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EcCouncil = () => {
    const [ecCouncils, setEcCouncils] = useState([])
    const getEcCouncilData = async () =>{
        try {
            // committee-types Data
            const res = await axios.get(`${BASE_URl}/api/committee-types`)
            setEcCouncils(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getEcCouncilData()
    },[])

    return (
        <div>
            <div>
                {
                    ecCouncils?.map(ecCouncil =>{
                        const {id, nameEn, descriptionEn} = ecCouncil || {};
                        return <div key={id} className="card">
                            <h3>{nameEn}</h3>
                            <h4>{descriptionEn}</h4>
                            <Link to={`/ecCouncils/${id}`} className="btn text-start">See Details</Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default EcCouncil;