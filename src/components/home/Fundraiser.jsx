import React from 'react'

const LatestMeeting = () => {
    return (
        <div name="LatestMeeting Container" className='w-full bg-[#1A2B52] py-2 px-16'>
            <div name="Title" className='text-center text-white text-[40px] border-b-white border-b-[2px]'>
                <h1>Support Us!</h1>
            </div>
            
            <div name="Meeting Container" className='w-full flex sm:flex-row flex-col mt-4 bg-white'>
                <div name="Left Meeting Container" className='flex justify-center w-full items-center h-full flex-1 bg-white'>
                    <img src={"https://res.cloudinary.com/dy3nrj03h/image/upload/q_auto:good/v1701378519/home/flyer_3.0_uzh3ry.jpg"} alt="meeting img" className="animate-slide_left p-4 object-cover h-[80vh]"/>
                </div>
                <div name="Right Meeting Container" className='p-4 animate-slide_right flex-1 w-full font-serif bg-gray-200'>
                    <div name="Text Container" className='flex flex-col text-center h-full items-center justify-center'>
                        <h1 name="Meeting Title" className='2xl:text-[70px] md:text-[40px] text-[20px]'>Oculus Raffle!</h1>
                        <h2 name="Meeting Time" className='2xl:text-[50px] md:text-[25px] text-[14px] italic'>Enter a drawing contest</h2>
                        <p name="Meeting Description" className='2xl:text-[30px] md:text-[18px] text-[10px] mt-2'>Enter by Nov. 30th. Winners will be announced by Dec. 1st.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestMeeting