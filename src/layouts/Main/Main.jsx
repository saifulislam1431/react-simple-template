import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>

            <Outlet />

            <section>
                <Footer />
            </section>

        </main>
    );
};

export default Main;