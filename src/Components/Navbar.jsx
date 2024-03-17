import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-teal-700 text-white py-2'>
            <div className='logo'>
                <span className='font-bold text-xl mx-8'>TaskMaster</span>
            </div>
            <ul className='flex gap-8 mx-9'>
                <li className='hover:font-bold cursor-pointer transition-all'>Home</li>
                <li className='hover:font-bold cursor-pointer transition-all'>Your Task</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
