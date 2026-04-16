
import { IoMdAdd } from "react-icons/io";
const Banner = () => {
    return (
        <div>
                <div className="hero container my-20 mx-auto text-black">
                    <div className="hero-content text-center">
                        <div className="">
                        <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-sm text-base-400">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture <br></br>the relationships that matter most.
                        </p>
                        <button className="btn bg-[#244D3F] text-white"><IoMdAdd/> Add Friend</button>
                        </div>
                    </div>
                    </div>
        </div>



    );
};

export default Banner;