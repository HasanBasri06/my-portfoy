import React from 'react'

function SocialMedia({image, href}) {
  return (
    <div className='linkedin'>
        <a href={href} target='_blank'>
            <img src={image} />
        </a>
    </div>
  )
}

export default SocialMedia