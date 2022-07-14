import React from 'react'

const Filter = ({filter}) => {
  return (
    <div className='flex space-x-3 justify-center text-xl text-white'>
        <button value='Male' onClick={()=>{filter(()=>filter('Male'))}} className='rounded-full bg-blue-500 py-2 px-6'>Male</button>
        <button value='Female' onClick={()=>{filter()}} className='rounded-full bg-blue-600 py-2 px-6'>Female</button>
        <button onClick={()=>{console.log('hero')}} className='rounded-full bg-blue-700 py-2 px-6'>Hero</button>
        <button onClick={()=>{console.log('villian')}} className='rounded-full bg-blue-800 py-2 px-6'>Villian</button>
    </div>
  )
}

export default Filter