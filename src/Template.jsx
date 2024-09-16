import React from 'react';
import CareerBox from './components/CareerBox';
import Header from './partials/Header';
import Github from '/src/assets/github.svg';
import Linkedin from '/src/assets/linkedin.svg';
import Profile from '/src/assets/profile_1.png';


function Template() {

  const careers = [
    {
      id: 1,
      title: 'Back-End Staj',
      company: 'Jotform',
      description: 'PHP ile jotform firmasında, online form geliştirmesinde, backend tarafında rol aldım.',
      date: '2022 - 2022',
      technologies: ['PHP', 'Curl', 'Git'],
    },

    {
      id: 2,
      title: 'Full-Stack Software',
      company: 'Online Psikolog',
      description: 'Online psikoterapi sağlayan bir firmada full stack yazılım geliştirdim.',
      date: '2022 - 2024',
      technologies: ['Laravel', 'Jquery', 'Bootstrap', 'Html / CSS', 'Git'],
    },

    {
      id: 3,
      title: 'Full-Stack Software - Freelence',
      company: 'Yönetim Paneli',
      description: 'Şirket çalışanlarının evrak ve çalışma düzeninin web tarafında işlenmesi için bir panel sağladım.',
      date: '2024 - 2024',
      technologies: ['Laravel', 'Jquery', 'Bootstrap', 'Html / CSS', 'Git'],
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
              <img src={Profile} />
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
              <img src={Linkedin} />
            </div>
            <div className='github'>
              <img src={Github} />
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
  </div>
  )
}

export default Template