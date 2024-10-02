import React from 'react'
import Profile from '/src/assets/profile_1.png'

function AboutMe() {
  return (
    <div className='aboutMe'>
        <div className='myProfilePhoto'>
            <img src={Profile} />
        </div>
        <div className='myTitle'>
            <div className='myName'>
            <h1>Hasan Basri Akcıl</h1>
            <h2>Full-Stack Developer</h2>
            </div>
            <p>
                Yazılım geliştirme alanında deneyimli bir mid level yazılım geliştiricisiyim.
                <br /><br />
                3 Yıldan beri bu alanda
                çalışmaktayım ve çeşitli projelerde yer aldım. Başta <strong>PHP/Laravel</strong> ve <strong>Javascript/VueJs</strong> olmak üzere
                çeşitli dillere hakimim, bunların yanında alt teknolojiler olarak da <strong>CSS/Bootstrap/Tailwindcss</strong> ve
                Jquery teknolojilerine hakimim.
            </p>
        </div>
    </div>
  )
}

export default AboutMe