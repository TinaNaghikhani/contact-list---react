import React from 'react'

export default function Button({onClick}) {
  return (
    <div>
      <button onClick={onClick} className='p-2 m-2 mt-4 rounded bg-gray-600 text-white hover:bg-green-600'>اضافه کردن</button>
    </div>
  )
}

