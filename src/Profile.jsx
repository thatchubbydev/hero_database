import React from 'react'

const Profile = ({newData}) => {
  return (
    <div  className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1'>
      {newData.map((item)=>(
            <div  key={item.id} className=' m-2 mb-2 p-2 text-white bg-gradient-to-r from-[#6ea6e6]  rounded-2xl'>
                      <p>{item.biography.firstAppearance}</p>
                      <img src={item.images.lg} className='h-20 w-20 rounded-full p-3 ' alt='test' />
                      <div className='pl-20 pt-2 flex-col'>
                          <h1>Name: {item.name}</h1>
                          <p>Strength: {item.powerstats.intelligence} </p>
                          <p>Gender: {item.appearance.gender} </p>
                          <p>Specie: {item.appearance.race} </p>
                          <p>Eye Color: {item.appearance.eyeColor} </p>
                      </div>
                  </div>
                  ))}
                  </div>
        
      
        
    
  )
}

export default Profile