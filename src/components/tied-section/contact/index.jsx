import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ClockIcon, MailIcon, PhoneIcon } from "../../icons";
import { useSendFeedbackMutation } from "../../../store/api";

const Contact = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [mutator] = useSendFeedbackMutation();

  const list = [
    {
      id: 1,
      title: "Telefon:",
      value: "+998(71) 123-45-67",
      icon: <PhoneIcon />,
      props: {
        to: "tel:+998711234567",
      },
    },
    {
      id: 2,
      title: "E-mail:",
      value: "uztiljamgarma@exat.uz",
      icon: <MailIcon />,
      props: {
        to: "mailto:uztiljamgarma@exat.uz",
      },
    },
    {
      id: 3,
      title: "Ish vaqti:",
      value: "Dushanba - juma: 9:00 dan 18:00 gacha",
      icon: <ClockIcon />,
    },
  ];

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await mutator(feedback);
      if (data) {
        Swal.fire({
          title: "Xabar muvaffaqiyatli yuborildi!",
          text: "Davom ettirishni xohlaysizmi",
          icon: "success",
          confirmButtonText: "Ha",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Xabar yuborishda xatolik!",
        text: "Davom ettirishni xohlaysizmi",
        icon: "error",
        confirmButtonText: "Ha",
      });
    } finally {
      setFeedback({
        name: "",
        email: "",
        description: "",
      });
    }
  };

  return (
    <div className="contact">
      <h2 className="site-title contact-title">Biz bilan bog‘laning</h2>
      <p className="contact-desc">
        Savollaringiz bormi yoki xizmatdan foydalanmoqchimisiz? <br />
        So‘rov qoldiring va biz tez orada siz bilan bog‘lanamiz
      </p>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="contact-form__wrapper">
            <label className="contact-form__label">
              <span className="contact-form__text">Ismingiz</span>
              <input
                className="contact-form__input"
                type="text"
                name="name"
                value={feedback.name}
                onChange={onChangeHandler}
                required
              />
            </label>
            <label className="contact-form__label">
              <span className="contact-form__text">E-mailingiz</span>
              <input
                className="contact-form__input"
                type="email"
                name="email"
                value={feedback.email}
                onChange={onChangeHandler}
                required
              />
            </label>
            <label className="contact-form__label">
              <span className="contact-form__text">Xabar matni</span>
              <textarea
                className="contact-form__textarea"
                type="text"
                name="description"
                rows={15}
                value={feedback.description}
                onChange={onChangeHandler}
                required
              />
            </label>
          </div>
          <button className="contact-form__button">Yuborish</button>
        </form>

        <ul className="contact-list">
          {list.map((item) => (
            <li className="contact-item" key={item.id}>
              {item.props ? (
                <Link className="contact-item__wrapper" {...item.props}>
                  {item.icon}
                </Link>
              ) : (
                <div className="contact-item__wrapper">{item.icon}</div>
              )}
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
