'use client'
import { FriendContext } from '../context/FriendContext';
import{useContext} from 'react'
import InteractionCard from './InteractionCard';

const Interactions = () => {
    const {interactionList} = useContext(FriendContext) ;
    console.log(interactionList) ;
    return (
        <div >
            {interactionList.map((interaction,index) => <InteractionCard key={index} friend={interaction}></InteractionCard>)}
        </div>
    );
};

export default Interactions;