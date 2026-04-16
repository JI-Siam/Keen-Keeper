'use client'
import React, { createContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext() ; 


const FriendProvider = ({children}) => {

        const [interactionList , setInteractionList] = useState([]) ; 

        const addInteraction = (friend, type) => {
            const entry = {
                ...friend,
                date: Date.now(),
                type,
            };
            setInteractionList([...interactionList, entry]);
        };

        const handleCall = ({ friend }) => {
            toast.success(`Calling ${friend.name} ...`);
            addInteraction(friend, "call");
        };

        const handleText = ({ friend }) => {
            toast.success(`Texting ${friend.name} ...`);
            addInteraction(friend, "text");
        };

        const handleVideo = ({ friend }) => {
            toast.success(`Video Calling ${friend.name} ...`);
            addInteraction(friend, "video");
        };

            const data = {
                interactionList, 
                setInteractionList, 
                handleCall, 
                handleText, 
                handleVideo
            }
    

    return (
        <FriendContext.Provider value={data}>
           {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;