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
                <br /><br />
                Analitik düşünme yeteneğim ve problem çözme becerilerimle karmaşık yazılım sorunlarını çözmekte
                kendime güveniyorum. Takım yönetimi ve takımla birlikte uyumlu çalışma konusunda da
                yetenekliyim, bir takımda <strong>scrum master</strong> görevinde bulundum.
                <br /><br />
                Yeniliklere açık bir yaklaşıma sahibim ve sürekli olarak kendimi geliştirmek için çaba harcıyorum.
                Kullandığım teknolojileri nasıl daha iyi kullanabilirim veya yakın çevre teknolojilerde nasıl gelişmeler
                oluyor bunları araştırmayı çok seviyorum. 
                <br /><br />
                Ekip çalışmasına uyumlu bir yapıya sahibim ancak aynı
                zamanda bağımsız olarak da etkili bir şekilde çalışabiliyorum.
            </p>
        </div>
    </div>
  )
}

export default AboutMe