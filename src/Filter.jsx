import React from 'react'

const Filter = ({setNewData, menuItems, newData, filterItem}) => {
  return (
    <div className='flex space-x-3 justify-center text-xl text-white'>
      {menuItems.map((Val,id)=>{
        <button className='text-white rounded-full bg-blue-500 py-2 px-6' onClick={()=> filterItem(Val)} key={id}>{Val}{console.log(Val)}</button>
      })}
        <button value='Male' onClick={()=>setNewData(newData)} className='rounded-full bg-blue-500 py-2 px-6'>All</button>
        {/* <button value='Female' onClick={()=>{filter()}} className='rounded-full bg-blue-600 py-2 px-6'>Female</button>
        <button onClick={()=>{console.log('hero')}} className='rounded-full bg-blue-700 py-2 px-6'>Hero</button>
        <button onClick={()=>{console.log('villian')}} className='rounded-full bg-blue-800 py-2 px-6'>Villian</button> */}
    </div>
  )
}

export default Filter