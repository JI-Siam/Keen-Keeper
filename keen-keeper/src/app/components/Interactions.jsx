'use client'
import { FriendContext } from '../context/FriendContext';
import{useContext} from 'react'
import {useState} from "react"
import InteractionCard from './InteractionCard';

const Interactions = () => {
    const {interactionList} = useContext(FriendContext) ;
    const [filteredData, setFilteredData] = useState([]) ;
   

    const handleFilter = (filterType) => {
        console.log(filterType) ;
         const newData = interactionList.filter(interaction => interaction.type == filterType) ;
         setFilteredData(newData); 

         if(filterType === "All") setFilteredData([]) ;
    }

    console.log(interactionList) ;
    console.log(filteredData , "filtered data") ;
    return (
        <div >
            <select defaultValue=""  className="select" onChange={(e)=> handleFilter(e.target.value)} >
                <option disabled={true}>Filter timeline</option>
                   <option value="All">All</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>
            {filteredData.length != 0 ? filteredData.map((interaction,index) => <InteractionCard key={index} friend={interaction}></InteractionCard>) : 
            interactionList.map((interaction,index) => <InteractionCard key={index} friend={interaction}></InteractionCard>) }
           
        </div>
    );
};

export default Interactions;