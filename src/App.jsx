import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="max-w-[1140px] mx-auto font-poppins">
            <Outlet />
        </div>
    );
};

export default App;