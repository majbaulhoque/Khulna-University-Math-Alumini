import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Discipline from "../Pages/Discipline/Discipline";
import Publication from "../Pages/Publication/Publication";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Log in/LogIn";
import Payment from "../Pages/Payment/Payment";
import LogOut from "../Pages/Log Out/LogOut";
import ApplyForMembership from "../Pages/Member/ApplyForMembership";
import MemberList from "../Pages/Member/MemberList";
import MembershipGuidelines from "../Components/Home/MembershipGuidelines";
import BoardOfTrustee from "../Components/About Us/BoardOfTrustee";
import Gallery from "../Pages/Gallery/Gallery";
import EcCouncil from "../Components/About Us/EcCouncil";
import GalleryDetails from "../Components/Gallery Details/GalleryDetails";
import SinglePublication from "../Components/Single Publication/SinglePublication";
import FacultyMember from "../Components/Faculty Member/FacultyMember";
import CommitteeDetails from "../Components/Ec Council/CommitteeDetails";



const route = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/discipline',
                element: <Discipline />,
            },
            {
                path: '/faculty/:id',
                element: <FacultyMember />,
            },
            {
                path: '/applyForMembership',
                element: <ApplyForMembership />,
            },
            {
                path: '/memberList',
                element: <MemberList />,
            },
            {
                path: '/publication',
                element: <Publication />,
            },
            {
                path: '/singlePublicationDetails/:id',
                element: <SinglePublication />
            },
            {
                path: '/guidelines',
                element: <MembershipGuidelines />,
            },
            {
                path: '/trustees',
                element: <BoardOfTrustee />,
            }, 
            {
                path: '/ecCouncil',
                element: <EcCouncil />,
            },
            {
                path: '/ecCouncils/:id',
                element: <CommitteeDetails />,
            }, 
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/galleryDetails',
                element: <GalleryDetails />, 
            },
            {
                path: '/logIn',
                element: <LogIn />,
            },
            {
                path: '/payment',
                element: <Payment />,
            },
            {
                path: '/logOut',
                element: <LogOut />,
            },
        ],
    },
]) 

export default route;