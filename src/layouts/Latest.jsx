import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="mt-[30px] flex gap-5 bg-[#F3F3F3] p-4">
            <button className="py-2 px-6 bg-[#D72050] text-white text-xl font-medium">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className="mr-5 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened!</Link>
                <Link to="/" className="mr-5 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened!</Link>
                <Link to="/" className="mr-5 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened!</Link>
            </Marquee>
        </div>
    );
};

export default Latest;