'use client'
import { FriendContext } from '../context/FriendContext';
import{useContext} from 'react'
import InteractionCard from './InteractionCard';

const Interactions = () => {
    const {interactionList} = useContext(FriendContext) ;
    console.log(interactionList) ;
    return (
        <div className="container mx-auto">
            {interactionList.map((interaction,index) => <InteractionCard key={index} friend={interaction}></InteractionCard>)}
        </div>
    );
};

export default Interactions;