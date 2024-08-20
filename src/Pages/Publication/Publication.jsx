import { useEffect, useState } from "react";
import { BASE_URl } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";



const Publication = () => {

    const [publications, setPublications] = useState([]);

    const getPublicationsData = async () => {
        try {
            const res = await axios.get(`${BASE_URl}/api/publications`);
            console.log(res.data);
            setPublications(res.data.publications);
            console.log(publications)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPublicationsData();
    }, []);

    return (
        <div>
            <h3>This is Publication page</h3>
            {/* <div className="container" >
                <div className="card p-3">
                    <h2>{publications['title']}</h2>
                    <h4>{publications['publicationDate']}</h4>
                    <p><strong>{publications['publicationType']}</strong></p>
                    <p><strong>Publication Date:</strong> {publications['publicationDate']}</p>
                    <p><strong>Volume:</strong> {publications['volumeNumber']}, <strong>Issue:</strong> {publications['issueNumber']}</p>
                    <p><strong>Pages:</strong> {publications['pageNumbers']}</p>
                    <p><strong>Description:</strong> {publications['description']}</p>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="card">
                    <h3>Card</h3>
                    <h2>{publications['totalItems']}</h2>
                    <p><strong>{publications['totalPages']}</strong></p>
                    <p><strong>{publications['currentPage']}</strong></p>
                    <p><strong>{publications[0]}</strong></p>
                </div>
            </div> */}
            <h1>Total Publicatios : {publications.length}</h1>
            <div>
                {
                    publications?.map(publication => {
                        const { id, title, publicationDate, publicationType, journalName } = publication || {};
                        return <div key={id} className="card">
                            <h3>Title : {title}</h3>
                            <p><strong>Publication Name : {publicationDate}</strong></p>;
                            <p><strong>Publication Type : {publicationType}</strong></p>
                            <p><strong>Journal Name : {journalName}</strong></p>
                            <Link to={`/singlePublicationDetails/${id}`} target="blank" className="fw-bolder text-decoration-none">
                                Publication Details
                            </Link>
                        </div>
                    })
                }
            </div>
        </div >
    );
};

export default Publication;