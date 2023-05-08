import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoadData from "../Pages/LoadData/LoadData";
import News from "../Pages/News/News";
import UpdateNews from "../Pages/UpdateNews/UpdateNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/loadData',
                element:<LoadData></LoadData>
            },
            {
                path:'/news/:id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/update-news/:id',
                element:<UpdateNews></UpdateNews>,
                loader:({params})=>fetch(`http://localhost:5000/update-news/${params.id}`)
            }
        ]
    }
])
export default router;