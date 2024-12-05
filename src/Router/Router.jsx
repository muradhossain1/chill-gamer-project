import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import WatchList from "../Pages/WatchList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReviewDetails from "../Components/ReviewDetails";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addReview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/watchList',
                element: <PrivateRoute><WatchList></WatchList></PrivateRoute>
            },
            {
                path: '/reviewDetails/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])
export default Router;