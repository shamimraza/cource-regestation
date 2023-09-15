/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ allSelected }) => {
    console.log(allSelected);
    const { name } = allSelected
    return (
        <div className=''>
            <h2 className='text-center font-bold text-[#2F80ED]'>Credit Hour Remaining 7 hr</h2>
            <hr className='w-[80%] mx-auto my-4 ' />
            <h3 className='ml-8 font-bold'>Course Name</h3>

            <div>
                {
                    allSelected.map((select, idx) => (
                        <div className='mt-3 ml-3'>
                            {idx + 1} {select.name}

                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default Cart;