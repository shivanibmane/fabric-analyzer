import React from 'react'

const FrameLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col items-center flex-1">
      {children}
    </div>
  )
}

export default FrameLayout
