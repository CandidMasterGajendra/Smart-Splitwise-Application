'use client'
import React from 'react'
import { Authenticated } from 'convex/react'

const MainLayout = ({children}) => {
  return (
    <div>
      <Authenticated>
        <div className='container mx-auto mb-20 mt-24'>{children}</div>
      </Authenticated>
    </div>
  )
}

export default MainLayout