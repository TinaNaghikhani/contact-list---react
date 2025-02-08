import React from 'react'

export default function Buttons({ onDelete , onEdit }) {
  return (
    <div className='mt-4 flex justify-end'>
      <button onClick={onDelete} className='p-1 rounded-r shadow-lg bg-red-500'>حذف</button>
      <button onClick={onEdit} className='p-1 rounded-l shadow-lg bg-blue-500'>ویرایش</button>
    </div>
  )
}
