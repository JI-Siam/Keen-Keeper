import Friend from "./Friend";
import {use} from "react"

const Friends =    ({friendsPromise}) => {
    const friends = use(friendsPromise);
    return (
        <div>
            <h1>Your Friends</h1>
            <div className="grid grid-cols-3 ">
                {friends.map(friend => <Friend key={friend.id} friend={friend}> </Friend>)}
            </div>
        </div>
    );
};

export default Friends;