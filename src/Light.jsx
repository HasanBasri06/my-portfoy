import React from 'react'

function Light({children}) {
  return (
    <>
        <div className='light'></div>
        {children}
    </>
  )
}

export default Light