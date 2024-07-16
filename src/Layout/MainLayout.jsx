import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;