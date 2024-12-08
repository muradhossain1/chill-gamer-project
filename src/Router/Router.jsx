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
import UpdateReview from "../Components/UpdateReview";
import ErrorPage from "../Components/ErrorPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-lake-xi.vercel.app/highest-rating-reviews')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://assignment-10-server-lake-xi.vercel.app/reviews')
            },
            {
                path: '/addReview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-lake-xi.vercel.app/reviews')
            },
            {
                path: '/watchList/:id',
                element: <PrivateRoute><WatchList></WatchList></PrivateRoute>
            },
            {
                path: '/reviewDetails/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-lake-xi.vercel.app/reviews/${params.id}`)
            },
            {
                path : 'updateReview/:id',
                element : <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-10-server-lake-xi.vercel.app/reviews/${params.id}`)
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