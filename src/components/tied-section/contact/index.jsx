const Contact = () => {
  return (
    <div className="contact">
      <h2 className="site-title contact-title">Biz bilan bog&apos;laning</h2>
      <p className="contact-desc">
        Savollaringiz bormi yoki xizmatdan foydalanmoqchimisiz? <br />
        So&apos;rov qoldiring va biz tez orada siz bilan bog&apos;lanamiz
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
      </div>
    </div>
  );
};

export default Contact;
