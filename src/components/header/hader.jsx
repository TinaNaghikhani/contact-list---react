import React from 'react'
import background from '../../assets/mobile1.jpg'

export default function Header() {
  return (
    <div className='mx-2 rounded-b-full p-2' style={{ backgroundImage: `url(${background})` }}>
      <h2 className='text-white text-center font-bold text-2xl'>وب اپلیکیشن مدیریت مخاطبین</h2>
    </div>
  )
}
