
'use client'
import Link from "next/link";
import { SlHome } from "react-icons/sl";
import { RiTimeLine } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import { usePathname } from "next/navigation";
import client from "react-dom/client";


const Navbar = () => {
    const pathName = usePathname() ;
    return (
     <div>
        <div className="navbar bg-white shadow-sm px-20 ">
                <div className="navbar-start">
                    <Link href="/" className="text-2xl text-[#244D3F]"><span className=" text-black font-bold">Keen</span>Keeper</Link>
                </div>

                <div className="navbar-end gap-3">
                    <Link href="/" className={`btn btn-ghost   ${pathName == "/" ? "bg-[#244D3F] text-white" : "text-black/30"}`}>
                <SlHome />Home</Link>
                    <Link href="/timeline" className={`btn btn-ghost  ${pathName == "/timeline" ? "bg-[#244D3F] text-white" : "text-black/30"}`}><RiTimeLine></RiTimeLine>Timeline</Link>
                    <Link href="/stats" className={`btn btn-ghost  ${pathName == "/stats" ? "bg-[#244D3F] text-white" : "text-black/30"}`}><IoIosStats></IoIosStats>Stats</Link>
                    
                </div>
         </div>
    </div>
    );
};

export default Navbar;