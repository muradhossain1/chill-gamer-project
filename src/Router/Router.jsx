import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import WatchList from "../Pages/WatchList";


const Router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path : '/allReviews',
                element: <AllReviews></AllReviews>
            },
            {
                path : '/addReview',
                element: <AddReview></AddReview>
            },
            {
                path : '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path : '/watchList',
                element: <WatchList></WatchList>
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
        ]
    }
])
export default Router;