import { Link, useParams } from "react-router-dom";
import Cards from "../../assets/Images/card.jpg"
import { useState } from "react";


const Gallery = () => {
    const {id} = useParams();
    const [galleryData, setGalleryData] = useState([])
    return (
        <div style={{ marginTop: "80px" }}>
            <div className="container">
            <Link to={`/galleryDetails/${id}`} className="fw-bolder text-decoration-none">
                <div className="row my-5 gy-3 gy-sm-5">
                    {Array(9).fill().map((_, idx) => (
                        
                            <div key={idx} className="card-container position-relative col-12 col-sm-6 col-md-4 col-lg-4 my-5">
                                <div className="img-box position-relative">
                                    <img className="image" src={Cards} alt="Gallery" />
                                    <figcaption className="card-img-overlay fw-bolder p-2 h3">Camera Caption</figcaption>
                                </div>
                                <div className="content">
                                    <h3>Camera</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis sunt. Sapiente maiores aliquam consequuntur iste odit sed excepturi libero!</p>
                                </div>
                            </div>
                    ))}
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Gallery;
