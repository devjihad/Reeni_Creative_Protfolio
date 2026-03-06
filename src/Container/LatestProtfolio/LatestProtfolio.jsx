import React from 'react';
import img1 from '../../assets/Container1.png'
import img2 from '../../assets/Container2.png'
import img3 from '../../assets/Container3.png'
import img4 from '../../assets/Container4.png'
import icon from '../../assets/Link.png'
const LatestProtfolio = () => {
    return (
        <div className='bg-cardBG'>
        <div className='container '>

            <div className='pt-25'>
            <p className='text-[16px] text-red1 text-center font-rubik '>LATEST PROTFOLIO</p>
            <p className='text-[48px] font-rajdhani font-bold text-center'>Transforming Ideas into Exceptional</p>
            <p className='text-[16px] font-rubik text-gray1 text-center mb-7.5 '>Business consulting consultants provide expert advice and guida businesses to help <br />them improve their performance, efficiency, and organizational</p>
            </div>

            <div className='grid grid-cols-2 gap-12.5 mt-15'>
                <div className=''>
                    <img src={img1} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Journey as a Creator <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img2} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Personal Protfolio <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                </div>

                <div className=''>
                    <img src={img3} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Personal Innovation <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>App Development</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img4} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>A Protfolio  of Craftify & Passion <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Business Development</p>
                    
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default LatestProtfolio;