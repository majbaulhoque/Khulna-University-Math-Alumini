import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PhotosOne from "../../assets/Images/download.jpeg";
import { BASE_URl } from "../../config";

const FacultyMember = () => {
    const [facultyData, setFacultyData] = useState([]);
    const [isError, setIsError] = useState('');
    const { id } = useParams();
    const { photo, nameEn, email, phone, education, teacherDesignation, description } = facultyData || {};

    const getFacultyData = async () => {
        try {
            const res = await axios.get(`${BASE_URl}/api/faculties/{id}?id=${id}`);
            setFacultyData(res.data);
            console.log(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getFacultyData();
    }, []);

    return (
        <div>
            {isError !== "" && <h2 className="text-center bg-danger">{isError}</h2>}
            <div className="container">
                <Card className='each-faculty p-3 bg-info mt-5 border-3 mx-auto' style={{width: '50rem'}}>
                    <div className="d-flex">
                        <div className="profile-card mx-5">
                            <div className="img">
                                <img src={PhotosOne} className="h-100" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <h4 className="fw-bolder mt-3">{nameEn}</h4>
                            <p className="">
                                <strong>
                                    <span className="faculty-description mt-2 d-block">Phone : {phone}</span>
                                    <span className="faculty-description mt-2 d-block">Designation : {teacherDesignation}</span>
                                    <span className="mt-2 d-block">{education}</span>
                                    <span className="faculty-description mt-2 d-block">{description}</span>
                                    <span className="faculty-description mt-2 d-block">{email}</span>
                                </strong>
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default FacultyMember;
