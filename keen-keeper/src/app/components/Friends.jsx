'use client'
import useFriend from "../hooks/useFriend";
import Friend from "./Friend";

const Friends =    () => {
   const {friends , loading} = useFriend() ;

    console.log(friends) ;
    return (
        <div className="sm:my-20">
            <h1 className="font-bold text-xl my-10">Your Friends</h1>
            <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {loading ? <span className="loading loading-spinner loading-xl"></span> : friends.map(friend => <Friend key={friend.id} friend={friend}> </Friend>)}
            </div>
        </div>
    );
};

export default Friends;