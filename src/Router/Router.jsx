import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Discipline from "../Pages/Discipline/Discipline";
import Member from "../Pages/Member/Member";
import Publication from "../Pages/Publication/Publication";
import AboutUs from "../Pages/About us/AboutUs";
import SignUp from "../Pages/Sign Up/SignUp";
import Profile from "../Pages/Profile/Profile";
import LogIn from "../Pages/Log in/LogIn";
import Payment from "../Pages/Payment/Payment";
import LogOut from "../Pages/Log Out/LogOut";


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
                path: '/member',
                element: <Member />,
            },
            {
                path: '/publication',
                element: <Publication />,
            },
            {
                path: '/about',
                element: <AboutUs />,
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