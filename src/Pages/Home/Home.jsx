import AboutKhulnaAlumni from "../../Components/About Us/AboutKhulnaAlumni";
import Committees from "../../Components/About Us/Committees";
import LatestNews from "../../Components/About Us/LatestNews";
import UpcomingEvent from "../../Components/About Us/UpcomingEvent";


const Home = () => {
    return (
        <div>
            <AboutKhulnaAlumni />
            <UpcomingEvent />
            <LatestNews />
            <Committees />
        </div>
    );
};

export default Home;