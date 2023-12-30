import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AddJobs from "../Components/AddJobs";
import MyPostedJob from "../Components/MyPostedJob";
import Update from "../Components/Update";
import Brand from "../Components/Brand";
import PraivateRoute from "../PraivateRoute/PraivateRoute";
import Details from "../Components/Details";
import CheckOut from "../Components/CheckOut";
import BitForm from "../Components/BitForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Register></Register>,
            },
            {
                path: "/job",
                element: <PraivateRoute><AddJobs></AddJobs></PraivateRoute>
            },
            {
                path: "/addjob",
                element: <PraivateRoute><MyPostedJob></MyPostedJob></PraivateRoute>,
                loader: () => fetch("https://assignment-11-server-site-online-marketing.vercel.app/job")
                
            },
            {
                path: "/addjob/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-online-marketing.vercel.app/job/${params.id}`)
            },
            {
                path: '/card/:name',
                element: <PraivateRoute><Brand></Brand></PraivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-online-marketing.vercel.app/card/${params.name}`)
            },
            {
                path: "/bit/:id",
                element: <Details></Details>,
                loader: () => fetch("https://assignment-11-server-site-online-marketing.vercel.app/card")
            },
            {
                path: "/bitform",
                element: <CheckOut></CheckOut>,
            },
            {
                path: "/mybits",
                element: <PraivateRoute><BitForm></BitForm></PraivateRoute>,
                loader: () => fetch("https://assignment-11-server-site-online-marketing.vercel.app/bit")
            }
        ]
    },
]);
export default router;