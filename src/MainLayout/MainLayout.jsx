import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const MainLayout = () => {
    return (
        <div className=" ">
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;