import React from "react";
import Profile from "/src/assets/profile_1.png";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="myProfilePhoto">
        <img src={Profile} />
      </div>
      <div className="myTitle">
        <div className="myName">
          <h1>Hasan Basri Akcıl</h1>
          <h2>Full-Stack Developer</h2>
        </div>
        <p>
          Yazılım geliştirme alanında 5 yıllık profesyonel deneyime sahip bir
          yazılım geliştiricisiyim. <br></br>
          Ağırlıklı olarak Laravel ile ölçeklenebilir ve güvenli backend
          servisleri, Vue.js ve Next.js ile modern, performans odaklı frontend
          uygulamaları geliştirmekteyim. Farklı sektörlerde yer alan projelerde
          uçtan uca geliştirme süreçlerinde aktif rol aldım; <br /><br /> gereksinim analizi,
          mimari tasarım, geliştirme ve bakım aşamalarında sorumluluk üstlendim.
          Temiz kod, sürdürülebilir mimari ve kullanıcı deneyimini merkeze alan
          çözümler üretmeye önem veriyorum.
          <br />
          <br />
          İletişim:
          <br />
          Telefon:{" "}
          <a
            className="hover:underline text-white"
            href="https://wa.me/+905061192539"
            target="_blank"
          >
            +90 506 119 25 39
          </a>
          <br />
          E-Posta:{" "}
          <a
            className="hover:underline text-white"
            href="mailto:basriakcil06@gmail.com"
          >
            basriakcil06@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
