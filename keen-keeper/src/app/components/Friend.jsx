
import Image from 'next/image';
import Link from 'next/link';

const Friend = ({friend}) => {
    return (
        <Link href={`/friend/${friend.id}`} className=" text-center">
            <div className="card bg-base-100 w-96 shadow-sm">
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
                    <p>{friend.days_since_contact}d ago</p>
                    <div className="card-actions flex gap-3 flex-wrap">
                        {friend.tags.map((item,index) => <span key={index} className="bg-emerald-100 px-3 py-2 rounded-full text-center">{item}</span>)}
                    </div>
        
                     <h3 className={`${friend.status == 'overdue' ? 'bg-red-700' : friend.status == 'active' ? 'bg-green-800' : 'bg-yellow-500' } text-white rounded-full px-3 py-2`}>{friend.status}</h3>
       
                </div>
            </div>
        </Link>
    );
};

export default Friend;