import axios from "axios";
import { Form, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BASE_URl } from "../../config";
import { useEffect } from "react";

const MemberList = () => {

    const getMemberList = async () =>{
        let id = 1;
        try {
            const res = await axios.get(`${BASE_URl}/api/members/{id}?id=${id}`)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getMemberList()
    },[])

    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="col-12 col-md-9 col-lg-9">
                        <h2 className="fw-bolder">Member List</h2>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 mt-2 mt-md-0">
                        <Form className="search-form">
                            <input type="text" name="searchBox" placeholder="Search..." className="input-box shadow-lg w-100" />
                            <button type="submit" className="search-box"><FaSearch className="m-2 rounded-circle" /></button>
                        </Form>
                    </div>
                </div>
                <div>
                    <Table className="my-3 border">
                        <tr className="table-header">
                            <th className="fw-bolder p-2 h5 col-5 col-lg-3 ">Student Id</th>
                            <th className="fw-bolder p-2 h5 m-lg-2 text-start col-9">Name</th>
                        </tr>
                        <tr className="table-data">
                            <td className="p-2 ">1</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-header">
                            <td className="p-2">0002</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-data">
                            <td className="p-2">0003</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-header">
                            <td className="p-2">0004</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-data">
                            <td className="p-2">0005</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-header">
                            <td className="p-2">0006</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-data">
                            <td className="p-2">0007</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-header">
                            <td className="p-2">0008</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                        <tr className="table-data">
                            <td className="p-2">0009</td>
                            <td className="p-2">Alfreds Futterkiste</td>
                        </tr>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MemberList;