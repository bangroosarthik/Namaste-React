import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
const AppLayout=()=>{
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/Home",
                element:<Body />,  
            },
            {
                path:"/about",
                element:<About />,
                
            },
            {
                path:"/contact",
                element:<Contact />,
                
            },
        ]
        
    },

]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


