import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import News from '../../assets/Images/news.jpg';
import { SlCalender } from "react-icons/sl";

const LatestNews = () => {
    return (
        <div className="my-5">
            <h3 className="fw-bolder text-center">Latest News</h3>
            <Carousel className='carousel carousel-parent p-3'>
                <Carousel.Item>
                    <div className="container">
                        <div className="row flex-row flex-nowrap overflow-auto">
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <Card className="card p-3" style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={News} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <p>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card{`'`}s content.
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <SlCalender style={{ marginRight: '5px' }} />
                                                <p className="mb-0">25 March 2024</p>
                                            </div>
                                            <div>
                                                <p className="mb-0">Read More</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <Card className="card p-3" style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={News} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <p>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card{`'`}s content.
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <SlCalender style={{ marginRight: '5px' }} />
                                                <p className="mb-0">25 March 2024</p>
                                            </div>
                                            <div>
                                                <p className="mb-0">Read More</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <Card className="card p-3" style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={News} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <p>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card{`'`}s content.
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <SlCalender style={{ marginRight: '5px' }} />
                                                <p className="mb-0">25 March 2024</p>
                                            </div>
                                            <div>
                                                <p className="mb-0">Read More</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default LatestNews;
