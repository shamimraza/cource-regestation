/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ allSelected, allTotalCost, remaining, totalcosting }) => {
    return (
        <div className='cart'>
            <h2 className='text-center font-bold text-[#2F80ED]'>Credit Hour Remaining {remaining} hr</h2>
            <hr className='w-[80%] mx-auto my-4 ' />
            <h3 className='ml-8 font-bold'>Course Name</h3>

            <div>
                {
                    allSelected.map((select, idx) => (
                        <div className='mt-3 ml-8 text-[#1C1B1B99]'>
                            {idx + 1} {select.name}
                        </div>

                    ))
                }
                <h1></h1>

            </div>
            <hr className='w-[80%] mx-auto my-4' />
            <h2 className='font-medium ml-8 text-[#1C1B1BCC]'>Total Credit Hour : {allTotalCost}</h2>
            <hr className='my-6' />
            <h1 className='ml-8 font-semibold '>Total Price : {totalcosting} USD</h1>
        </div>
    );
};

export default Cart;