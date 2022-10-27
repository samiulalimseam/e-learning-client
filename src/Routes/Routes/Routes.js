import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import CourseCatalog from "../../Pages/CourseCatalog/CourseCatalog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Account from "../../Pages/User/Account";
import Login from "../../Pages/User/Login";
import SignUp from "../../Pages/User/SignUp";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/account',
                element: <Account></Account>
            },
            {
                path: '/category',
                
                element: <Category></Category>
            },
            {
                path: '/course/:id' ,
                element: <Course></Course>
            },
            {
                path:'/category/:id',
                
                element: <Courses></Courses>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }

])

export default routes;