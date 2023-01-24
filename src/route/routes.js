import { createBrowserRouter } from "react-router-dom";
import About from "../layout/About";
import ContactPage from "../layout/ContactPage";
import Home from "../layout/Home";
import Layout from "../layout/Layout";
import PackageDetails from "../layout/PackageDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/packageDetails/:id",
                element:<PackageDetails/>
            },
            {
                path:"/aboutus",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactPage/>
            },
        ]
    },
    
]);

export default routes;