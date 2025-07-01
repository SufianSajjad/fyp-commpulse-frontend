import React from 'react'

import addIcon from '../assets/other/add.png'
import Sentiments from './HomeStats/Sentiments'
import ActiveParticipation from './HomeStats/ActiveParticipation'
import AgendaAdherence from './HomeStats/AgendaAdherence'
import Clarity from './HomeStats/Clarity'
import RecentMeeting from './HomeMeetings/RecentMeeting'

function Home() {
    return (
        <div className='py-10 pl-28 pr-7 flex flex-col gap-10 h-screen overflow-hidden'>
            {/* Greeting with new meeting button*/}
            <div className='flex w-full justify-between'>
                {/* Greeting */}
                <h1 className='font-semibold text-3xl'>Hello, Haris</h1>

                {/* New Meeting Button */}
                <button className='bg-palettePink text-white font-semibold flex items-center gap-1 px-2 py-1 rounded-lg hover:shadow-xl transition duration-500'>
                    <img src={addIcon} alt='add' className='w-4'></img>
                    New Meeting
                </button>
            </div>

            {/* Meeting Stats */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-semibold text-gray-800 text-2xl w-fit mx-auto'>Your Stats</h1>
                <div className='flex justify-between'>
                    <Sentiments />
                    <ActiveParticipation />
                    <AgendaAdherence />
                    <Clarity />
                </div>
            </div>

            {/* Recent Meetings */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-semibold text-gray-800 text-2xl w-fit mx-auto'>Your Meetings</h1>
                <div className='flex flex-col gap-8 max-h-[calc(100vh-22rem)] overflow-y-auto'>
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                    <RecentMeeting
                        title={"Discussion on UI Design of K-Net"}
                        date={new Date().toLocaleDateString()}
                        length={
                            {
                                hours: 1,
                                minutes: 30
                            }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
