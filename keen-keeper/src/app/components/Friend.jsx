import React from 'react';

const Friend = ({friend}) => {
    return (
        <div className="bg-base-200 text-center">
                <h1>{friend.name}</h1>
        </div>
    );
};

export default Friend;