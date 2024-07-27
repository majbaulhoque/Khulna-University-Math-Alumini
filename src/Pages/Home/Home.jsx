import AboutKhulnaAlumni from "../../Components/Home/AboutKhulnaAlumni";
import Committees from "../../Components/Home/Committees";
import LatestNews from "../../Components/Home/LatestNews";
import UpcomingEvent from "../../Components/Home/UpcomingEvent";



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