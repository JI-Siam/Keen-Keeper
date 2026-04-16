import React from 'react';

const StatsCard = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-2 sm:gap-10">
                <div className="rounded-2xl  py-10 text-center border border-gray-200 ">
                    <h2 className="text-[#244D3F] text-2xl font-bold">21</h2>
                     <h3 className="text-gray-500">Total Friends</h3>
                </div>

                  <div className="rounded-2xl  py-10 text-center border border-gray-200 ">
                    <h2 className="text-[#244D3F] text-2xl font-bold">5</h2>
                     <h3 className="text-gray-500">On Track</h3>
                </div>

                  <div className="rounded-2xl  py-10 text-center border border-gray-200 ">
                    <h2 className="text-[#244D3F] text-2xl font-bold">10</h2>
                     <h3 className="text-gray-500">Need Attention</h3>
                </div>

                  <div className="rounded-2xl  py-10 text-center border border-gray-200 ">
                    <h2 className="text-[#244D3F] text-2xl font-bold">52</h2>
                     <h3 className="text-gray-500">Interaction This Month</h3>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;