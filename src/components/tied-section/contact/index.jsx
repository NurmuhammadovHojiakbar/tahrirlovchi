import { ClockIcon, MailIcon, PhoneIcon } from "../../icons";

const Contact = () => {
  const list = [
    {
      id: 1,
      title: "Telefon:",
      value: "+998(71) 123-45-67",
      icon: <PhoneIcon />,
    },
    {
      id: 2,
      title: "E-mail:",
      value: "uztiljamgarma@exat.uz",
      icon: <MailIcon />,
    },
    {
      id: 3,
      title: "Ish vaqti:",
      value: "Dushanba - juma: 9:00 dan 18:00 gacha",
      icon: <ClockIcon />,
    },
  ];
  return (
    <div className="contact">
      <h2 className="site-title contact-title">Biz bilan bog‘laning</h2>
      <p className="contact-desc">
        Savollaringiz bormi yoki xizmatdan foydalanmoqchimisiz? <br />
        So‘rov qoldiring va biz tez orada siz bilan bog‘lanamiz
      </p>

      <div className="contact-wrapper">
        <form className="contact-form">
          <div className="contact-form__wrapper">
            <label className="contact-form__label">
              <span className="contact-form__text">Ismingiz</span>
              <input className="contact-form__input" type="text" name="name" />
            </label>
            <label className="contact-form__label">
              <span className="contact-form__text">E-mailingiz</span>
              <input className="contact-form__input" type="email" name="name" />
            </label>
            <label className="contact-form__label">
              <span className="contact-form__text">Xabar matni</span>
              <textarea
                className="contact-form__textarea"
                type="text"
                name="name"
                rows={15}
              />
            </label>
          </div>
          <button className="contact-form__button">Yuborish</button>
        </form>

        <ul className="contact-list">
          {list.map((item) => (
            <li className="contact-item" key={item.id}>
              <div className="contact-item__wrapper">{item.icon}</div>
              <div className="contact-item__text">
                <h3 className="contact-item__title">{item.title}</h3>
                <p className="contact-item__value">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
