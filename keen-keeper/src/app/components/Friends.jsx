import Friend from "./Friend";
import {use} from "react"

const Friends =    async () => {
     const res = await fetch('http://localhost:3000/data.json');
    const friends=await res.json() ;

    console.log(friends) ;
    return (
        <div>
            <h1 className="font-bold text-xl my-10">Your Friends</h1>
            <div className="grid grid-cols-3 gap-3">
                {friends.map(friend => <Friend key={friend.id} friend={friend}> </Friend>)}
            </div>
        </div>
    );
};

export default Friends;