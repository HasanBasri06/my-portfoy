import React from 'react';
import AboutMe from './components/AboutMe';
import Agenda from './components/Agenda';
import CareerBox from './components/CareerBox';
import SocialMedia from './components/SocialMedia';
import Technology from './components/Technology';
import GithubWhite from '/src/assets/github-white.svg';
import Github from '/src/assets/github.svg';
import Linkedin from '/src/assets/linkedin.svg';
import Header from '/src/partials/Header';

function Template() {

  const careers = [
    {
      title: 'Back-End Staj',
      company: 'Jotform',
      description: 'PHP ile jotform firmasında, online form geliştirmesinde, backend tarafında rol aldım.',
      date: '2022 - 2022',
      technologies: ['PHP', 'Curl', 'Git'],
    },

    {
      title: 'Full-Stack Software Dev',
      company: 'Online Psikolog',
      description: 'Online psikoterapi sağlayan bir firmada full stack yazılım geliştirdim.',
      date: '2022 - 2024',
      technologies: ['Laravel', 'Jquery', 'Bootstrap', 'Html / CSS', 'Git'],
    },
    {
      title: 'Full-Stack Software Dev.',
      company: 'Basamak Bilişim',
      description: 'Derneklere hizmet veren bir yazılım firmasında yazılım desteği sundum.',
      date: '2022 - 2024',
      technologies: ['PHP', 'Jquery', 'Bootstrap', 'Html / CSS'],
    },
    {
      title: 'Full-Stack Software - Freelence',
      company: 'Yönetim Paneli',
      description: 'Şirket çalışanlarının evrak ve çalışma düzeninin web tarafında işlenmesi için bir panel sağladım.',
      date: '2024 - 2024',
      technologies: ['Laravel', 'Jquery', 'Bootstrap', 'Html / CSS', 'Git'],
    },
    {
      title: 'Full-Stack Software',
      company: 'Copetract',
      description: 'Türkiye genelinde devleşmiş firmaların dijital belge yönetimini sağlayan hizmetlerin yazılım departmanında çalıştım.',
      date: '2025 - 2026',
      technologies: ['Laravel', 'NextJs', 'Tailwind', 'Git', 'Gitlab', 'NodeJs', 'AI'],
    },
  ];

  const agendas = [
      {
          id: 1,
          name: 'Şirket İçi Evrak',
          image: GithubWhite,
          href: null,
          description: 'Şirketler için hazırlanmış evrak ve eleman takibi api',
          technologies: ['Laravel', 'Swagger', 'Rest Api']
      },
      {
          id: 2,
          name: 'Anlık Mesajlaşma',
          image: GithubWhite,
          href: null,
          description: 'Bire bir ve grup konuşması yapabileceği sohbet uygulaması',
          technologies: ['Vue']
      }
  ];

  
  function careerLists () {
    return careers.reverse().sort((a, b) => b.id - a.id)
  }

  return (
    <div className='main'>
      <Header />
      <div className='content'>
          <AboutMe />
          <div className='socialMedias'>
            <SocialMedia href="https://www.linkedin.com/in/hasan-basri-b10b6b1ba/" image={Linkedin} />
            <SocialMedia href="https://github.com/HasanBasri06" image={Github} />
          </div>

          <div className='agendaBox' id='gundem'>
            <h3 className='title'>Gündem</h3>
            <div className='agendaDesc'>Şuanda üzerinde çalıştığım projeler</div>
            <div className='agendaBoxes'>
              {
                agendas.map(agenda => <Agenda key={agenda.id} agenda={agenda} />)
              }
            </div>
          </div>

          <div className='technologiesBox' id='technologies'>
              <Technology />
          </div>

          <div className='careerListBox' id='career'>
            <h3 className='title'>Kariyer</h3>
            <div className='careerDesc'>
              Yazılım hayatım 2016 da meslek lisesi bilişim bölümünde başladı.
            </div>
            <div className='careerList'>
                { careerLists().map((career, index) => <CareerBox career={career} key={index} />) }
            </div>
          </div>
      </div>

  </div>
  )
}

export default Template