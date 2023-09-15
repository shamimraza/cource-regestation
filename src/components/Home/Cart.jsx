/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ allSelected, allTotalCost, remaining }) => {
    console.log(allSelected);
    return (
        <div className=''>
            <h2 className='text-center font-bold text-[#2F80ED]'>Credit Hour Remaining {remaining} hr</h2>
            <hr className='w-[80%] mx-auto my-4 ' />
            <h3 className='ml-8 font-bold'>Course Name</h3>

            <div>
                {
                    allSelected.map((select, idx) => (
                        <div className='mt-3 ml-8'>
                            {idx + 1} {select.name}
                        </div>

                    ))
                }
                <h1></h1>

            </div>
            <hr className='w-[80%] mx-auto my-4' />
            <h2 className='font-medium ml-8'>Total Credit Hour : {allTotalCost}</h2>
        </div>
    );
};

export default Cart;