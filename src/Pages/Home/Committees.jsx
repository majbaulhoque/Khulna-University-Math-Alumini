import { Link } from 'react-router-dom';
import TeamWork from '../../assets/Images/teamwork.png'
import Ec from '../../assets/Images/video-conference.png'

const Committees = () => {
    return (
        <div className="my-5">
            <h3 className="fw-bolder text-center">Committees</h3>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 mb-4 mb-sm-0 text-center mx-2">
                        <Link to='/trustees' className='text-decoration-none'>
                            <div className="committees-board align-content-center shadow-lg">
                                <img src={TeamWork} height={80} alt="committees" />
                                <h3 className='text-white fw-bold'>Board of trustees</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 text-center mx-2">
                        <div className="committees-ec align-content-center rounded-pill shadow-lg">
                            <img src={Ec} height={80} alt="committees" />
                            <h3 className='text-darker fw-bolder'>EC Council</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committees;
