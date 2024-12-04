import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div className=" ">
            <header>
                <Header></Header>
            </header>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default MainLayout;