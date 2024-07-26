import AboutKhulnaAlumni from "./AboutKhulnaAlumni";
import Committees from "./Committees";
import LatestNews from "./LatestNews";
import UpcomingEvent from "./UpcomingEvent";



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