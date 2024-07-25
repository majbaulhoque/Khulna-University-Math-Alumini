import { useEffect, useState } from "react";

const BoardOfTrustee = () => {
    const [trustees, setTrustees] = useState([]);

    useEffect(() => {
        fetch('trustee.json')
            .then(res => res.json())
            .then(data => {
                console.log(data); // Debugging line
                setTrustees(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className="container">
                <h3 className="fw-bolder py-3">Organization & Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias esse ab architecto facere nobis accusamus eaque itaque porro fugit error, dicta maxime. Est harum consequuntur porro beatae, ipsam, officia quibusdam laudantium doloremque maxime similique minima labore facere, totam blanditiis aut nobis consectetur quo tempora quas! Repellendus exercitationem nostrum accusamus a.</p>
                <h3 className="text-center fw-bolder">Board of Trustees</h3>
                <div className="row my-5">
                    {trustees.length === 0 && <p>No trustees available.</p>}
                    {trustees.map(trustee => (
                        <div key={trustee.id} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card p-3 bg-dark">
                                <img 
                                    src={trustee.img || "https://via.placeholder.com/150"} 
                                    alt={trustee.name} 
                                    className="img-fluid" 
                                />
                                <h4 className="fw-bolder text-white mt-2">{trustee.name}</h4>
                                <p className="fw-bolder text-white">{trustee.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoardOfTrustee;
