import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Discipline from "../Pages/Discipline/Discipline";
import Publication from "../Pages/Publication/Publication";
import AboutUs from "../Pages/About us/AboutUs";
import SignUp from "../Pages/Sign Up/SignUp";
import Profile from "../Pages/Profile/Profile";
import LogIn from "../Pages/Log in/LogIn";
import Payment from "../Pages/Payment/Payment";
import LogOut from "../Pages/Log Out/LogOut";
import ApplyForMembership from "../Pages/Member/ApplyForMembership";
import MemberList from "../Pages/Member/MemberList";
import MembershipGuidelines from "../Components/About Us/MembershipGuidelines";


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
                path: '/guidelines',
                element: <MembershipGuidelines />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/signUp',
                element: <SignUp />,
            },
            {
                path: '/profile',
                element: <Profile />,
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