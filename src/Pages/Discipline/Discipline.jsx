import { useEffect, useState } from "react";
import Khulna from "../../assets/Images/khulna_university_logo.png";

const Discipline = () => {
    const [facultys, setFacultys] = useState([]);

    useEffect(() => {
        fetch("faculty.json")
            .then(res => res.json())
            .then(data => setFacultys(data))
    }, []);

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-12 col-md-2 text-center text-md-start">
                    <img src={Khulna} alt="Khulna University" className="img-fluid" style={{ maxHeight: '180px' }} />
                </div>
                <div className="col-12 col-md-10">
                    <h2 className="fw-bolder">Mathematics Discipline, Khulna University</h2>
                    <p>
                        Mathematics Discipline was opened in Khulna University from the academic session 1998-1999 and offers four year undergraduate program leading to the degree of Bachelor of Science (Honours) in Mathematics, abbreviated as BSc (Hons.), MSc in Mathematics. From 2002-2003 academic sessions, Mathematics Discipline offers one year postgraduate program leading to the degree of MSc in applied/pure Mathematics. PhD program is started from 2014-2015 sessions. The Discipline emphasizes both theoretical and practical aspects of Mathematics as well as the supporting subjects. Mathematics is a human activity, a social phenomenon, a set of methods used to help illuminate the world, and it is the part of our culture. It{`'`}s almost impossible to get through a day without using math in some way, because our world is full of numbers to handle and problems to solve. Studying math provides us with the tools to make sense of it all, making life that little bit easier. Modern science requires mathematics, and proper mathematics needs to be developed before a technological advent/invention. Mathematics has a very significant role to play for the future development of all areas of sciences through its application. The aims of Mathematics Discipline in Khulna University are to provide high quality innovative programs of teaching, learning, research and continuing professional education to students of wide background, both nationally and internationally. The content of each subjects are introduced in such a way that a student will learn basic mathematical concepts and skills, and learn how to apply them to solve problems in everyday life or in a future career, be it academic or vocational. From 2010, each year, A. F. Mujbur Rahman Foundation announces Gold Medal awards to students on the basis of their excellent merit in Mathematics. From 2013, we are organizing the Khulna zonal Mathematics Olympiad every year. Every year, we are arranging national / International conference in our discipline to develop and exchange the research knowledge to others. Our faculty members and students are attending different National and International conferences every year.
                    </p>
                </div>
            </div>
            <div className="my-3">
                <h2 className="fw-bolder pb-3">Faculty Members</h2>
                <div className="row">
                    {facultys?.map(faculty => (
                        <div key={faculty.id} className="col-12 col-md-6 col-lg-3 gy-3">
                            <div className="card p-3 bg-dark h-100">
                                <img src={faculty.img} alt="" className="rounded-top img-fluid" />
                                <h3 className="fw-bolder text-white py-1">{faculty.name}</h3>
                                <p className="fw-bolder text-white">{faculty.title}</p>
                                <p className="text-white">{faculty.number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discipline;
