import { Link } from "react-router-dom";
import "./about.scss";

const AboutApp = () => {
  return (
    <div className="container">
      <div className="about-app">
        <header className="about-app__header">
          <h2 className="about-app__title">O&apos;zbek tili imlo dasturi</h2>
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
            – so‘z va matnlarni lotin-kirill, kirill-lotin garafikasiga to‘g‘ri
            o‘girish hamda tekshirish uchun yuborilgan matnni ilmo qoidalari
            asosida tahlil qilish va matnda xato yozilgan so‘zlarni ajratish,
            shuningdek o‘zbek tilining izohli va imlo lug‘ati maʼlumotlar
            bazasidan samarali foydalanish imkoniyatlarini taqdim etadi.{" "}
          </p>
          <br />
          <br />
          <p className="about-app__text">
            Mazkur loyiha O‘zbekiston Respublikasi Prezidentining
            “Mamlakatimizda o‘zbek tilini yana-da rivojlantirish va til
            siyosatini takomillashtirish chora-tadbirlari to‘g‘risida” 2020-yil
            20-oktabrdagi PF-6084-son Farmoni ijrosi doirasida Axborot
            texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi
            tizimidagi “Yagona integrator UZINFOCOM” MChJ tomonidan O‘zbek
            tilini rivojlantirish jamg‘armasi mablag‘lari hisobidan amalga
            oshirilgan.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutApp;
