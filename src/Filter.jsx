import React from 'react'

const Filter = ({setNewData, menuItems, newData, filterItem}) => {
  return (
    <div className='flex space-x-3 justify-center text-xl text-white'>
      {menuItems.map((Val,id)=>{return(
        <button 
        className='text-white rounded-full bg-blue-500 py-2 px-6' 
        onClick={()=> filterItem(Val)}
        key={id}
        >
        {Val}
      </button>
      )
        
      })}
        <button value='Male' onClick={()=>setNewData(newData)} className='rounded-full bg-blue-500 py-2 px-6'>All</button>
       
    </div>
  )
}

export default Filter