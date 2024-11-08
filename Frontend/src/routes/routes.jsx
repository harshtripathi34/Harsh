import { patch } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import App from "../App";
import Menupage from "../pages/Menupage";
import Cartpage from "../pages/Cartpage";
import FoodDetailpage from "../pages/FoodDetailpage";
import { Orderspage } from "../pages/Orderspage";
import { Loginpage } from "../pages/Loginpage";
import { Registerpage } from "../pages/Registerpage";
import Buypage from "../pages/Buypage";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Homepage/>
            },
            {
                path:'/menu',
                element:<Menupage/>
            },{
                path:'/cart',
                element:<Cartpage/>
            },{
                path:'/detail',
                element:<FoodDetailpage/>
            },{
                path:'/orders',
                element:<Orderspage/>
            },{
                path:'/login',
                element:<Loginpage/>
            },{
                path:'/register',
                element:<Registerpage/>
            },{
                path:'/buy',
                element:<Buypage/>
            }
        ]
    }
]);