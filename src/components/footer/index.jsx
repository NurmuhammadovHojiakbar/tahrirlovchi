import "./footer.scss";
import LogoIcon from "../../assets/images/site-logo-white.png";
import CompanyIcon from "../../assets/images/company-logo.png";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  // InstagramIcon,
  TelegramIcon,
  // YoutubeIcon,
} from "../icons";

const Footer = () => {
  const links = [
    {
      id: 1,
      icon: <FacebookIcon />,
      path: "https://www.facebook.com/groups/2740806312635791",
    },
    {
      id: 2,
      icon: <TelegramIcon />,
      path: "https://t.me/dtrdep",
    },
    // {
    //   id: 3,
    //   icon: <InstagramIcon />,
    //   path: "/",
    // },
    // {
    //   id: 4,
    //   icon: <YoutubeIcon />,
    //   path: "/",
    // },
  ];

  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <div className="site-footer__logos">
          <img
            className="site-footer__logo"
            src={LogoIcon}
            alt="Tahrirlovchi"
            width={157}
            height={50}
          />
          <Link to="https://uzinfocom.uz/uz" target="_blank">
            <img
              className="site-footer__logo"
              src={CompanyIcon}
              alt="Uzinfocom"
              width={181}
              height={20}
            />
          </Link>
        </div>
        <div className="site-footer__socials">
          <div className="site-footer__line"></div>
          <div className="footer-socials">
            {links.map((link) => (
              <Link
                className="footer-socials__link"
                to={link.path}
                key={link.id}
                target="_blank"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="site-footer__line"></div>
        </div>
        <div className="site-footer__info">
          <p className="site-footer__info-text">
            O‘zbek tilini rivojlantirish jamg‘armasi <br />
            <Link
              className="site-footer__info-link"
              to="https://digital.uz/"
              target="_blank"
            >
              Raqamli texnologiyalar vazirligi
            </Link>{" "}
            ko‘magida
          </p>
          <Link to="https://www.uz/ru/res/visitor/index?id=47189" target="_top">
            <img
              height="31"
              src="https://cnt0.www.uz/counter/collect?id=47189&pg=http%3A//tahrirlovchi.uz&&col=0063AF&amp;t=ffffff&amp;p=DD7900"
              width="88"
              border="0"
              alt="Топ рейтинг www.uz"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
