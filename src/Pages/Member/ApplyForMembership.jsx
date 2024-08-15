import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ApplyForMembership = () => {
    return (
        <div>
            <h2 className='fw-bolder container my-3'>Our Membership Form</h2>
            <section className="container my-2 text-darker py-3">
                <Form className='parent-form p-3'>
                    <Form.Group className='mb-3' as={Col} controlId="formUniversityId">
                        <Form.Label>University ID</Form.Label>
                        <Form.Control type="number" placeholder="ID" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name (English)" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formNickName">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control type="text" placeholder="Nick Name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className='mb-3' as={Col} controlId="formLastName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name (Bangla)" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFatherName">
                            <Form.Label>Father{`'`}s Name</Form.Label>
                            <Form.Control type="text" placeholder="Name (English)" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formMotherName">
                            <Form.Label>Mother{`'`}s Name</Form.Label>
                            <Form.Control type="text" placeholder="Mother Name" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className='mb-3' as={Col} controlId="formContactInfo">
                            <Form.Label>Contact Info</Form.Label>
                            <Form.Control type="text" placeholder="Contact Info" />
                        </Form.Group>
                        <Form.Group className='mb-3' as={Col} controlId="formMobileNo">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="number" placeholder="Mobile" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className='mb-3' as={Col} controlId="formPresentAddress">
                            <Form.Label>Present Address</Form.Label>
                            <Form.Control type="text" placeholder="Present Address" />
                        </Form.Group>
                        <Form.Group className='mb-3' as={Col} controlId="formPermanentAddress">
                            <Form.Label>permanent Address</Form.Label>
                            <Form.Control type="number" placeholder="permanent Address" />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formJobInfo">
                            <Form.Label>ALUMNI CURRENT JOB INFORMATION</Form.Label>
                            <Form.Control type="text" placeholder="Job Info" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formJobInfo">
                            <Form.Label>Organization (If any)</Form.Label>
                            <Form.Control type="text" placeholder="Organization Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formDesignation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Designation" />
                        </Form.Group>
                    </Row>

                    <Form.Group className='mb-3' as={Col} controlId="formGridState">
                        <Form.Label>ACADEMIC INFORMATION</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Select...</option>
                            <option>SSC</option>
                            <option>HSC</option>
                            <option>BSC(Hons)</option>
                            <option>MSC</option>
                            <option>Mphill</option>
                            <option>PHD</option>
                            <option>MBA/others</option>
                        </Form.Select>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formInstitute">
                            <Form.Label>Institute</Form.Label>
                            <Form.Control type="text" placeholder="Institute Name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formPassingYear">
                            <Form.Label>Passing Year</Form.Label>
                            <Form.Control type="number" placeholder="Year" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formPersonalData">
                            <Form.Label>Personal Data Details</Form.Label>
                            <Form.Control type="text" placeholder="Data" style={{height: '100px'}}/>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formDistrict">
                            <Form.Label>Home District</Form.Label>
                            <Form.Control type="text" placeholder="District" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formReligion">
                            <Form.Label>Religion</Form.Label>
                            <Form.Control type="text" placeholder="Religion" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBlood">
                            <Form.Label>Blood Group</Form.Label>
                            <Form.Control type="text" placeholder="Blood Group" />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formMartial">
                            <Form.Label>Martial Status</Form.Label>
                            <Form.Control type="text" placeholder="Martial Status" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formSpouse">
                            <Form.Label>Spouse Name</Form.Label>
                            <Form.Control type="text" placeholder="Spouse Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formNoOfChild">
                            <Form.Label>No. Of Child</Form.Label>
                            <Form.Control type="number" placeholder="No. Of Child" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        </div>
    );
};

export default ApplyForMembership;