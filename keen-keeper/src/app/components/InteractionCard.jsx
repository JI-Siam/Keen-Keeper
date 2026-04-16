
import { FaHandshake } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

 const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const InteractionCard = ({friend}) => {

    const date = new Date(friend.date);
    const month = date.getMonth();       // 0–11 (0 = January)
    const day = date.getDate();      
    const year = date.getFullYear() ;    
    return (
        <div >  

            <div className="flex gap-10 border border-gray-300 p-5 items-center rounded-xl my-5">
                <div className="text-5xl text-[#244D3F]">
                        {friend.type == "Call" ? <IoCall/> : friend.type == "Text" ? <RiMessage2Line/> : <CiVideoOn/>} 
                </div>
                <div>
                            <h2 className="card-title">{friend.type} <span className="text-black/50 font-normal">with {friend.name}</span></h2>
                            <p>{months[month]} {day}, {year}</p>
                </div>
             </div>

        </div>
    );
};

export default InteractionCard;