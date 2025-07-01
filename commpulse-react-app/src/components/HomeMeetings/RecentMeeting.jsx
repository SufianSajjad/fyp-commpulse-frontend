import React from 'react'

function RecentMeeting({ title, date, length }) {
    return (
        <div className='w-full bg-gray-200 border-b-4 border-black p-3 flex items-center justify-between'>
            
            {/* Meeting title and date*/}
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <p>{date}</p>
            </div>

            {/* Meeting Length */}
            <div className='font-bold text-lg text-white bg-palettePurple px-2 py-1 rounded-lg'>
                {length.hours}h {length.minutes}m
            </div>
        </div>
    )
}

export default RecentMeeting
