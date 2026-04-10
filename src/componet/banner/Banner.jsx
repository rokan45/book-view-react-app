import React from 'react';
import BannerImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col shadow-md py-10 lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg "
                />
                <div className='p-10 '>
                    <h1 className="text-5xl font-bold leading-15">Books to freshen up your bookshelf</h1>

                    <button className="btn btn-success mt-7 text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;