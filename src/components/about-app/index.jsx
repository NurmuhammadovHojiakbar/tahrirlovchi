import { Link } from "react-router-dom";
import "./about.scss";

const AboutApp = () => {
  return (
    <div className="container">
      <div className="about-app">
        <header className="about-app__header">
          <h2 className="about-app__title">O‘zbek tili imlo dasturi</h2>
        </header>
        <section className="about-app__info">
          <p className="about-app__text">
            O‘zbek tilidagi matnlar tahririga mo‘ljallangan veb-resurs
          </p>
          <br />
          <br />
          <p className="about-app__text">
            <Link className="about-app__link" to="https://tahrirlovchi.uz">
              Tahrirlovchi.uz
            </Link>{" "}
            – so‘z va matnlarni lotin-kirill, kirill-lotin grafikasiga to‘g‘ri
            o‘girish hamda tekshirish uchun yuborilgan matnni ilmo qoidalari
            asosida tahlil qilish va matnda xato yozilgan so‘zlarni ajratish,
            shuningdek, o‘zbek tilining izohli va imlo lug‘ati maʼlumotlar
            bazasidan samarali foydalanish imkoniyatlarini taqdim etadi.{" "}
          </p>
          <br />
          <br />
          <p className="about-app__text">
            Mazkur loyiha O‘zbekiston Respublikasi Prezidentining
            “Mamlakatimizda o‘zbek tilini yanada rivojlantirish va til
            siyosatini takomillashtirish chora-tadbirlari to‘g‘risida” 2020-yil
            20-oktabrdagi PF–6084-son Farmoni ijrosi doirasida Raqamli
            texnologiyalar vazirligi tizimidagi “Yagona integrator UZINFOCOM”
            MChJ tomonidan O‘zbek tilini rivojlantirish jamg‘armasi mablag‘lari
            hisobidan amalga oshirilgan.
          </p>
          <br />
          <br />
          <p className="about-app__text">
            Loyiha quyidagi imkoniyatlarni taqdim qiladi:
          </p>
          <ul className="about-app__list">
            <li className="about-app__item">
              Matn va so‘zlarni lotin-kirill, kirill-lotin grafikasiga onlayn,
              tez va bexato o‘girish;
            </li>
            <li className="about-app__item">
              Matn va so‘zlarning yozilish jihatdan to‘g‘riliginini tekshirish;
            </li>
            <li className="about-app__item">
              Barcha yo‘nalishlardagi izohli lug‘atlar bazasi;
            </li>
            <li className="about-app__item">
              Sonlarni lotin hamda kirill grafikasida tezkorlik bilan so‘zlarga
              aylantirish;
            </li>
            <li className="about-app__item">
              Microsoft Word hamda Microsoft Excel fayllardagi matnlarni lotin
              va kirill grafikasiga tezkorlik bilan o‘girish;
            </li>
            <li className="about-app__item">
              Rasmlardan matnni ajratib olish.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutApp;
