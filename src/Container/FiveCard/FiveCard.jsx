import React from 'react';

const FiveCard = () => {
    return (
        <div className='container mt-7.5 flex gap-7.5'>
            <div className='px-13 pt-9 pb-12.75 bg-cardBG w-1/2 rounded-xl'>
                <div className='flex gap-16.25 items-center py-9.75 pr-12.75'>
                    <h3 className='text-[167px] font-bold text-red1 leading-0'>2.5 </h3>
                    <p className='text-[41px] font-rajdhani font-bold'>Years of <br />Experience</p>
                </div>
                <p>Business consulting consultants provide expert advice and guida the <br /> a businesses to help theme their performance efficiency</p>
            </div>

            <div className='grid grid-cols-2 gap-7.5'>
                <div className='py-8 text-center w-70 h-40.5 bg-cardBG  rounded-xl mr-7.5'>
                    <h3 className='text-[48px] font-rajdhani font-bold'>20K+ </h3>
                    <p className='text-[16px] text-gray1 font-rubik'>Our Project Complite</p>
                </div>

                <div className='py-8 text-center w-70 h-40.5 bg-cardBG  rounded-xl'>
                    <h3 className='text-[48px] font-rajdhani font-bold'>10K+ </h3>
                    <p className='text-[16px] text-gray1 font-rubik'>Natural Product</p>
                </div>

                <div className='py-8 text-center w-70 h-40.5 bg-cardBG  rounded-xl'>
                    <h3 className='text-[48px] font-rajdhani font-bold'>200+ </h3>
                    <p className='text-[16px] text-gray1 font-rubik'>Client Review</p>
                </div>

                <div className='py-8 text-center w-70 h-40.5 bg-cardBG  rounded-xl'>
                    <h3 className='text-[48px] font-rajdhani font-bold'>1000+ </h3>
                    <p className='text-[16px] text-gray1 font-rubik'>Our Satisfied Claient</p>
                </div>
            </div>
        </div>
    );
};

export default FiveCard;