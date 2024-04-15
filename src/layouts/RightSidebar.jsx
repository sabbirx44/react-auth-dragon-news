import { FaGithub, FaGoogle } from "react-icons/fa";
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Twitter from '../assets/Twitter.png';

const RightSidebar = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold mb-5">Login With</h2>
                <button className="btn btn-wide btn-outline rounded-none mb-[10px]">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-wide btn-outline rounded-none">
                    <FaGithub />
                    GitHub
                </button>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
                <a href="#" className="flex items-center gap-[10px] border p-4">
                    <img src={Facebook} />
                    <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-[10px] border-x p-4">
                    <img src={Instagram} />
                    <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-[10px] border p-4">
                    <img src={Twitter} />
                    <span>Twitter</span>
                </a>
            </div>
        </div>
    );
};

export default RightSidebar;