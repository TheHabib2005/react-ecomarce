import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { LuLayoutDashboard, LuMessageCircle } from 'react-icons/lu'
import { RiCalendar2Line } from 'react-icons/ri'

const SideBar = () => {
    return (
        <div className='w-[300px] bg-zinc-900/50 px-5 h-screen'>
            <div className='flex items-center py-5 text-white'>
                <h1 className='text-2xl font-bold '>MyContact</h1>
            </div>
            <div className='my-5'>
                <div className='flex items-center bg-zinc-800 px-3 rounded-md gap-2'>
                    <FaSearch className='text-zinc-600' />
                    <input type='text' className='flex-1 bg-transparent w-full h-full py-3 outline-none text-white placeholder:text-zinc-400' placeholder='Search Contacts' />
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-zinc-300 text-xl font-semibold'>Main Menu</h1>

                <ul className='flex flex-col list-none gap-y-2 mt-5'>
                    <li className='flex items-center gap-3 text-xl font-semibold p-2 rounded-md text-zinc-500 cursor-pointer'><LuLayoutDashboard /> DashBoard</li>
                    <li className='flex items-center gap-3 text-xl font-semibold p-2 rounded-md text-zinc-500 cursor-pointer'><RiCalendar2Line /> TimeLine</li>
                    <li className='flex items-center gap-3 text-xl font-semibold p-2 rounded-md text-zinc-500 cursor-pointer'><LuMessageCircle /> Chats</li>


                </ul>
            </div>
        </div>
    )
}

export default SideBar