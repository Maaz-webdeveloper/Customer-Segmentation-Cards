import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex gap-10 items-center px-18 h-[90vh]'>
        <Left />
        <Right user={props.user} />
    </div>
  )
}

export default Page1Content