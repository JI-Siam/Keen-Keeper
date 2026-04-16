
'use client'
import { Pie, PieChart } from 'recharts';
import { FriendContext } from '../context/FriendContext';
import {useContext} from 'react'

const StatsChart = () => {
    const {interactionList} = useContext(FriendContext) ;

    const textCnt = interactionList.filter(int => int.type == "Text").length ;
     const callCnt = interactionList.filter(int => int.type == "Call").length ;
      const videoCnt = interactionList.filter(int => int.type == "Video").length ;


      console.log(textCnt , "text Cnt") ;
      console.log(callCnt , "call Cnt") ;
      console.log(videoCnt , "video Cnt") ;

    const data = [
  { name: 'Text', value: textCnt, fill: '#244D3F' },
  { name: 'Call', value: callCnt, fill: '#01590E' },
  { name: 'Video', value: videoCnt, fill: '#36013F' },

];

    return ( 
        <div className="container mx-auto bg-gray-100 my-20 rounded-2xl">
            <div>
                <h1 className="p-10 text-2xl font-bold">Friendship Analytics</h1>
                       <PieChart      className='mx-auto py-20' style={{width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
            />
            </PieChart>
            </div>
         
        </div>
    );
};

export default StatsChart;