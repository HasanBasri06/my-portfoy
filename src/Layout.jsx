import React from 'react'
import Footer from './partials/footer'
import Header from './partials/header'


function Layout() {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
          <div className='aboutMe'>
            <div className='myProfilePhoto'>
              <img src='/src/assets/profile_1.png' />
            </div>
            <div className='myTitle'>
              <div className='myName'>
                <h1>Hasan Basri Akcıl</h1>
                <h2>Full-Stack Developer</h2>
              </div>
              <p>
                Merhaba
                <br /><br />
                to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee
              </p>
            </div>
          </div>
          <div className='socialMedias'>
            <div className='linkedin'>
              <img src='/src/assets/linkedin.svg' />
            </div>
            <div className='github'>
              <img src='/src/assets/github.svg' />
            </div>
          </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
  </div>
  )
}

export default Layout