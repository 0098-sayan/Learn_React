import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = () => {
  return (
    <div className='flex px-16 py-10 h-[90vh] gap-10  '>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default PageContent