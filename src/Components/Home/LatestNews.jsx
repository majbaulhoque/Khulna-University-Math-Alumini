import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineRead } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const [latestDatas, setLatestDatas] = useState([]);
    const [isError, setIsError] = useState('');
    const [hoveredCardId, setHoveredCardId] = useState(null);

    const getLatestData = async () => {
        try {
            const res = await axios.get('/latest.json'); 
            setLatestDatas(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getLatestData();
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="my-5">
            <div className="container">
                <h2 className="fw-bolder text-center mb-5">Latest News</h2>
                {isError && <h1 className="text-center text-warning">{isError}</h1>}
                <div className="row">
                    {latestDatas?.map(({ id, title, description, img }) => (
                        <div key={id} className="col-12 col-md-6 col-lg-4 mb-4" data-aos="zoom-in" style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHoveredCardId(id)}
                            onMouseLeave={() => setHoveredCardId(null)}>
                            <Card className="card">
                                <Card.Img variant="top" src={img} />
                                {hoveredCardId === id && ( 
                                    <div
                                        className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                                            color: "white",
                                            transition: "opacity 0.3s ease",
                                            opacity: 1, 
                                        }}
                                    >
                                        <Link
                                            to='#'
                                            target="_blank"
                                            className="text-light text-decoration-none"
                                        >
                                            <div className="d-flex align-items-center">
                                                Read More <AiOutlineRead className="ms-2" />
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </Card>
                            <h3 className="text-center mt-3">{title}</h3>
                            <p className="text-center">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
