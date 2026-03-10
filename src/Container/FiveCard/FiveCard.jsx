import React, { useContext } from 'react';
import { contextData } from '../../Context/Context';

const FiveCard = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
        <div className='container mt-30 flex flex-col md:flex-row px-5 md:px-0 gap-7.5'>
            <div className={`px-10 pt-9 pb-12.75  md:w-1/2 rounded-xl  ${togglevalue? 'bg-gradient-to-br from-cardBG from-60% to-[#FF494A] to-30':' bg-[#F4F4F4]'}`}>
                <div className='md:flex gap-16.25 items-center py-5 md:py-9.75 md:pb-16 md:pr-12.75'>
                    <h3 className='text-[60px] md:text-[167px] font-bold text-red1 leading-20 md:leading-0'>25 </h3>
                    <p className='text-[26px] md:text-[41px] font-rajdhani font-bold'>Years of <br className='hidden md:inline'/>Experience</p>
                </div>
                <p>Business consulting consultants provide expert advice and guida the <br className='hidden md:inline'/> a businesses to help theme their performance efficiency</p>
            </div>

            <div className='  grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7.5'>
                <div className={`py-8 text-center  md:w-70 h-40.5 rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <h3 className='text-[48px] font-rajdhani font-bold'>20K+ </h3>
                    <p className={`text-[16px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>Our Project Complite</p>
                </div>

                <div className={`py-8 text-center  md:w-70 h-40.5 rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1 '}`}>
                    <h3 className='text-[48px] font-rajdhani font-bold'>10K+ </h3>
                    <p className={`text-[16px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>Natural Product</p>
                </div>

                <div className={`py-8 text-center  md:w-70 h-40.5 rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1 '}`}>
                    <h3 className='text-[48px] font-rajdhani font-bold'>200+ </h3>
                    <p className={`text-[16px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>Client Review</p>
                </div>

                <div className={`py-8 text-center  md:w-70 h-40.5 rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1 '}`}>
                    <h3 className='text-[48px] font-rajdhani font-bold'>1000+ </h3>
                    <p className={`text-[16px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>Our Satisfied Claient</p>
                </div>
            </div>
        </div>
    );
};

export default FiveCard;