import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Cart from "../../Pages/Cart/Cart";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import CourseCatalog from "../../Pages/CourseCatalog/CourseCatalog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Account from "../../Pages/User/Account";
import Login from "../../Pages/User/Login";
import SignUp from "../../Pages/User/SignUp";
import PrivateRoutes from "./PrivateRoutes";

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
                element: <PrivateRoutes> <Account></Account> </PrivateRoutes>
            },

            {
                path: '/category',
                
                element: <Category></Category>
            },
            {
                path:'/cart/:id',
                loader: ({params})=> fetch(`https://educare-server-eta.vercel.app/course/${params.id}`),
                element: <PrivateRoutes> <Cart></Cart> </PrivateRoutes>
            },
            {
                path: '/course/:id' ,
                loader: ({params})=> fetch(`https://educare-server-eta.vercel.app/course/${params.id}`),
                element: <Course></Course>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path:'/courses/:id',
                loader: ({params})=> fetch(`https://educare-server-eta.vercel.app/category/${params.id}`),
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