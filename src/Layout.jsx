import React from 'react';
import CareerBox from './components/CareerBox';
import Footer from './partials/footer';
import Header from './partials/header';


function Layout() {

  const careers = [
    {
      id: 1,
      title: 'Back-End Staj',
      company: 'Jotform',
      description: 'PHP ile jotform firmasında online form sitesinde backend tarafını geliştiridim',
      date: '2022 - 2022'
    },

    {
      id: 2,
      title: 'Full-Stack Software',
      company: 'Online Psikolog',
      description: 'Online psikoterapi sağlayan bir firmada full stack yazılım geliştirdim.',
      date: '2022 - 2024'
    },
  ];

  function careerLists () {
    return careers.sort((a, b) => b.id - a.id)
  }

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

          <div className='agendaBox'>
            <h3 className='title'>Gündem</h3>
            <div className='agendaBoxes'>
              <div>a</div>
              <div>b</div>
            </div>
          </div>

          <div className='careerListBox'>
            <h3 className='title'>Kariyer</h3>
            <div className='careerDesc'>
              Yazılım hayatım 2016 da meselek lisesi bilişim bölümünde başladı.
            </div>
            <div className='careerList'>
              <ul>
                { careerLists().map(item => (
                  <li className='space-y-5 leftStick careerListRow' key={item.id}>
                    <CareerBox career={item} />
                  </li>
                )) }
              </ul>
            </div>
          </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
  </div>
  )
}

export default Layout