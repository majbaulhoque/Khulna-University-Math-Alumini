import { Link } from "react-router-dom";


const AboutKhulnaAlumni = () => {
    return (
        <section className="container">
            <div className="my-5">
                <h2 className="fw-bolder text-center">About Khulna Alumni
                </h2>
                <p className="my-3">
                    <span className="fw-bolder fs-4">Goal: </span>
                    The Alumni Association of Khulna University was formed in the year 2009. A constitution was formulated in April 2011.
                    The goal of our organization is to work in favor of current and former students, arranging reunions between them at regular intervals,
                    giving direction, advising, and responding to social obligations...  
                    <Link to="/guidelines" target="blank" className="fw-bolder text-decoration-none">
                        See More
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default AboutKhulnaAlumni;