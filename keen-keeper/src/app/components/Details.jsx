
'use client'

import Image from 'next/image';
import { IoMdCall } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { FriendContext } from '../context/FriendContext';
import { useContext } from 'react';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
 
const Details = ({friend}) => {

    const {handleCall , handleText , handleVideo} = useContext(FriendContext) ;
    return (
        <div>
                <div className="container mx-auto grid gap-10 md:grid-cols-3 ">
                            <div className="left-cont md:col-span-1">
                                     <div className="card bg-base-100  shadow-sm">
                                                        <figure className="px-10 pt-10">
                                                            <div className="relative w-[100px] h-[100px]">
                                                                <Image
                                                                    src="/image.png"
                                                                    alt="friend-image"
                                                                    fill
                                                                    className="rounded-full object-cover"
                                                                />
                                                                </div>
                                                           
                                                        </figure>
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title">{friend.name}</h2>
                                                        <h3 className={`${friend.status == 'overdue' ? 'bg-red-700' : friend.status == 'active' ? 'bg-green-800' : 'bg-yellow-500' } text-white rounded-full px-3 py-2`}>{friend.status}</h3>
                                                        <div className="card-actions flex gap-3 flex-wrap">
                                                            {friend.tags.map((item,index) => <span key={index} className="bg-emerald-100 px-3 py-2 rounded-full text-center">{item}</span>)}
                                                        </div>
                                                          <p className="text-gray-400">{friend.bio}</p>
                                            
                                                         
                                           
                                                    </div>
                                       </div>
                                       
                                       <div className="my-10 gap-2 grid grid-cols-1">
                                            <button className="btn btn-ghost border-gray-200"><HiOutlineBellSnooze/>Snooze 2 Weeks</button>
                                              <button className="btn btn-ghost border-gray-200"><FiArchive/>Archieve</button>
                                                <button className="btn btn-ghost border-gray-200 text-red-400"><RiDeleteBin6Line/>Delete</button>
                                       </div>
                            </div>

                            <div className="right-cont md:col-span-2">
                                    <div className="toplayer grid md:grid-cols-3 gap-3">

                                        <div className="card bg-base-100 shadow-sm">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl">{friend.days_since_contact}</h2>
                                                <p className="text-gray-500">Days Since Contact</p>
                                            </div>
                                        </div>

                                        <div className="card bg-base-100 shadow-sm">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl">{friend.goal}</h2>
                                                <p className="text-gray-500">Goal Days</p>
                                            </div>
                                        </div>

                                        <div className="card bg-base-100  shadow-sm">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl">{friend.next_due_date}</h2>
                                                <p className="text-gray-500">Next Due</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                   <div className="midlayer my-5 card bg-base-100 shadow-sm flex flex-col">

                                            <div className="card-body">
                                                        <div className="flex flex-row justify-between">
                                                                <h2 className="card-title text-[#244D3F] ">Relationship Goal</h2>
                                                <button className="btn btn-ghost">Edit</button>
                                                        </div>

                                                 <div >
                                                 <p className="text-gray-500">Connect Every <span className="text-black font-bold">{friend.goal} days</span></p>
                                                </div>
                                            </div>

                                           
                                    </div>

                                    <div className="bottomlayer ">

                                             <div className=" p-5 my-5 card bg-base-100 shadow-sm flex flex-col">
                                                 <h2 className="card-title mb-10">Quick Check-In</h2>

                                        <div className="grid md:grid-cols-3 gap-3">

                                        <div className="card bg-base-100 shadow-sm" onClick={()=> handleCall({friend})}>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl"><IoMdCall></IoMdCall></h2>
                                                <p className="text-gray-500">Call</p>
                                            </div>
                                        </div>

                                        <div className="card bg-base-100 shadow-sm"  onClick={()=> handleText({friend})}>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl"><LuMessageSquareMore></LuMessageSquareMore></h2>
                                                <p className="text-gray-500">Text</p>
                                            </div>
                                        </div>

                                        <div className="card bg-base-100  shadow-sm"  onClick={()=> handleVideo({friend})}>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-2xl"><IoVideocamOutline></IoVideocamOutline></h2>
                                                <p className="text-gray-500">Video</p>
                                            </div>
                                        </div>
                                                 
                                             </div>
                                             </div>
                                            
                                    </div>
                            </div>
                </div>
        </div>  
    );
};

export default Details;