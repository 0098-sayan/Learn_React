import React from 'react'

const Card = (props) => {
    
    
  return (
    <div className='flex items-center border flex-col w-80 px-5 py-7 bg-gray-200 mx-10 my-10 rounded-lg'>
        <img className='h-25 w-25 object-cover rounded-full' src={props.img} alt="" />
        <h1 className='text-2xl font-bold tracking-wider mt-4'>{props.user}</h1>
        <p className='text-sm text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, est.</p>
        <button className='bg-blue-500 px-4 py-2 rounded-md mt-5 cursor-pointer hover:bg-blue-800'>View Profile</button>
    </div>
  )
}

export default Card