import Articles from "../layouts/Articles";
import Latest from "../layouts/Latest";
import Header from "../layouts/Header";
import LeftSidebar from "../layouts/LeftSidebar";
import Navbar from "../layouts/Navbar";
import RightSidebar from "../layouts/RightSidebar";

const Home = () => {
    return (
        <div>
            <Header />
            <Latest />
            <Navbar />
            <h1 className="text-3xl font-bold">This is home!</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
                <div><LeftSidebar /></div>
                <div className="md:col-span-2"><Articles /></div>
                <div><RightSidebar /></div>
            </div>
        </div>
    );
};

export default Home;