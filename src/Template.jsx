import React from 'react';
import AboutMe from './components/AboutMe';
import Agenda from './components/Agenda';
import CareerBox from './components/CareerBox';
import Technology from './components/Technology';
import Footer from './partials/Footer';
import Header from './partials/Header';
import GithubWhite from '/src/assets/github-white.svg';
import Github from '/src/assets/github.svg';
import Linkedin from '/src/assets/linkedin.svg';

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

  const agendas = [
      {
          id: 1,
          name: 'Şirket İçi Evrak',
          image: GithubWhite,
          href: null,
          description: 'Şirket içi evrak takibi ve işe alım ve çıkartım için bir script',
          technologies: ['Laravel', 'Swagger', 'Rest Api']
      },
      {
          id: 2,
          name: 'To Do App',
          image: GithubWhite,
          href: null,
          description: 'Vue js ile to do uygulaması yapıyorum',
          technologies: ['Vue']
      }
  ];

  
  function careerLists () {
    return careers.sort((a, b) => b.id - a.id)
  }

  return (
    <div className='main'>
      <Header />
      <div className='content'>
          <AboutMe />
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
              {
                agendas.map(agenda => <Agenda key={agenda.id} agenda={agenda} />)
              }
            </div>
          </div>

          <div className='technologiesBox'>
              <Technology />
          </div>

          <div className='careerListBox'>
            <h3 className='title'>Kariyer</h3>
            <div className='careerDesc'>
              Yazılım hayatım 2016 da meslek lisesi bilişim bölümünde başladı.
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
      <Footer />

  </div>
  )
}

export default Template