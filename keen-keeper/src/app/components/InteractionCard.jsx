
import { FaHandshake } from "react-icons/fa";

const InteractionCard = ({friend}) => {
    return (
        <div className="flex gap-4 border-gray-100 items-center rounded-xl my-10">  

            <div>
                    <FaHandshake></FaHandshake>
            </div>

            <div className="card card-border bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="card-title">{friend.type} with {friend.name}</h2>
                        <p>{friend.date}</p>
                    </div>
              </div>
            
            
        </div>
    );
};

export default InteractionCard;