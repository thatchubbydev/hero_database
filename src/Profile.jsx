import React from 'react'

const Profile = ({newData}) => {
  return (
      newData.map((item)=>(<div key={item.id} className='flex flx-col space-between '>
            <div  className=' m-2 mb-2 p-2 text-white bg-blue-500 rounded-2xl w-1/2'>
                      <p>{item.biography.firstAppearance}</p>
                      <img src={item.images.lg} className='h-20 w-20 rounded-full p-3 ' alt='test' />
                      <div className='pl-20 pt-2 flex-col'>
                          <h1>name: {item.name}</h1>
                          <p>powerstat: {item.powerstats.intelligence} </p>
                          <p>gender: {item.appearance.gender} </p>
                      </div>
                  </div>
                  </div>))
        
      
        
    
  )
}

export default Profile