import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BASE_URl } from "../../config";

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMembers, setFilteredMembers] = useState([]);

    // Fetch member list from API
    const getMemberList = async () => {
        try {
            const res = await axios.get(`${BASE_URl}/api/members`);
            setMembers(res.data.members);
            setFilteredMembers(res.data.members); 
            console.log(res.data.members);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMemberList();
    }, []);

    // Search functionality
    const handleSearchClick = () => {
        const search = searchTerm.toLowerCase().trim();
        if (search === "") {
            setFilteredMembers(members);
        } else {
            const filtered = members.filter((member) => {
                const memberName = member.nameEn.toLowerCase(); // Correcting nameEn access
                const memberId = member.id.toString();
                return memberName.includes(search) || memberId.includes(search);
            });
            setFilteredMembers(filtered);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row my-3 justify-content-around align-items-center">
                    <div className="col-12 col-md-9 col-lg-7">
                        <h2 className="fw-bolder">Member List</h2>
                    </div>
                    <div className="col-12 col-md-3 col-lg-5 mt-2 mt-md-0">
                        <Form className="search-form position-relative d-flex align-items-center">
                            <input
                                type="text"
                                name="searchBox"
                                placeholder="Search..."
                                className="input-box w-100  p-3"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="button" className="search-box d-flex justify-content-center align-items-center" onClick={handleSearchClick}>
                                <FaSearch />
                            </button>
                        </Form>
                    </div>
                </div>

                <div className="table-responsive">
                    <Table striped bordered hover className="my-3">
                        <thead>
                            <tr className="table-header">
                                <th className="fw-bolder p-2 h5 col-5 col-lg-5 w-auto">Member Id</th>
                                <th className="fw-bolder p-2 h5 text-start col-9 w-auto">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers?.map((member, index) => (
                                <tr key={index}>
                                    <td className="p-2 col-2">{member.id}</td>
                                    <td className="p-2 absorbing-column">{member.nameEn}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MemberList;
