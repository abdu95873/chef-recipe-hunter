import React from 'react';
import photo from '../../../assets/pexels-photo-1624487.jpeg';

const Banner = () => {
    return (
        <div className='d-flex my-5 ms-4 bg-dark text-light'>
            <div className='w-50 my-auto'>
                <h1 className='mx-4'>Hunt your CHEF</h1>
                    <h4 className='mx-4'> Chef Hunter</h4>


            </div>
            <img className='w-50' style={{height: 600}} src={photo} alt="" />
        </div>
    );
};

export default Banner;