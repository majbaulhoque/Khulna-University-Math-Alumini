import { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutKhulnaAlumni = () => {
    const [showMission, setShowMission] = useState(false);

    const handleToggleMission = (e) => {
        e.preventDefault();
        setShowMission(prevShowMission => !prevShowMission);
        if (!showMission) {
            const missionSection = document.getElementById("our-mission");
            if (missionSection) {
                missionSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="container">
            <div className="my-5">
                <h2 className="fw-bolder text-center">About Khulna Alumni</h2>
                <p className="my-3">
                    <span className="fw-bolder fs-4">Goal: </span>
                    The Alumni Association of Khulna University was formed in the year 2009. A constitution was formulated in April 2011.
                    The goal of our organization is to work in favor of current and former students, arranging reunions between them at regular intervals,
                    giving direction, advising, and responding to social obligations...
                    <Link to="#" className="fw-bolder text-decoration-none" onClick={handleToggleMission}>
                        {showMission ? "See Less" : "See More"}
                    </Link>
                </p> 
            </div>
            {showMission && (
                <section id="our-mission" className="mt-5">
                    <div className="container my-3">
                        <h2 className="fw-bolder text-center mb-3">Our Mission</h2>
                        <p className="mb-3">
                            To create a purposeful and forward-looking organization for the alumni of Khulna University&apos;s Mathematics Discipline for their social, cultural, and professional pursuits; for fostering greater cohesion and fellowship among themselves; for rendering all possible support to the transformation of the beloved alma mater into an institution of higher learning in mathematical sciences that is among the best in the world; and for contributing to accelerated and sustainable national development.
                        </p>
                        <h2 className="fw-bolder mb-3">Membership Guidelines</h2>

                        <ul>
                            <li className="fw-bolder">A. ELIGIBILITY OF MEMBERSHIP</li>
                            <li>After successfully completing graduation, every student of Khulna University{`'`}s Mathematics Discipline is eligible to join the Mathematics Alumni Association.</li>
                            <li className="fw-bolder">B. CATEGORY OF MEMBERSHIP</li>
                            <li>There are two types of Membership</li>
                            <li className="fw-bolder">GENERAL MEMBER</li>
                            <li>Any student of the Mathematics Discipline of Khulna University can join the Alumni after successfully completing their graduation by filling up the membership form and depositing <span className="fw-bolder">BDT 200</span> membership fee.</li>
                            <li>Former students who have employment will deposit BDT 500 for the yearly membership fee.</li>
                            <li className="fw-bolder">LIFETIME MEMBER</li>
                            <li>Any General member can achieve lifetime membership with a one-time payment of <span className="fw-bolder">BDT 2,400</span> or <span className="fw-bolder">BDT 3,000</span> by depositing yearly.</li>
                            <li className="fw-bolder">PROCESS OF MEMBERSHIP:</li>
                            <li>A membership fee and yearly fee to be paid via the provided form from the organization.</li>
                            <li>Have to sign a No Objection Letter on obeying the discipline and constitution of the organization.</li>
                            <li className="fw-bolder">D. RESPONSIBILITY, RIGHT, AND BENEFIT OF MEMBERSHIP</li>
                            <li>All members should pay the regular membership fee. The membership fee is not mandatory for any Advisor. Members can contribute to important decisions, development activities, and will be able to express their opinions.</li>
                            <li className="fw-bolder">E. TERMINATION OF MEMBERSHIP</li>
                            <li>Failure to deposit the membership fee for two consecutive years will result in temporary cancellation of membership. A failure of four consecutive years will result in permanent cancellation of membership.</li>
                            <li>If any member acts against the organization, if a no-confidence motion is placed against any member and passed, or if any member violates any rule of the constitution, this can result in the cancellation/termination of the membership.</li>
                            <li>If any activity of a member hurts the image of the organization or hinders the organization by monetary means, the membership may be terminated.</li>
                        </ul>
                    </div>
                </section>
            )}
        </section>
    );
};

export default AboutKhulnaAlumni;
