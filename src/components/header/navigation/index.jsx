import { Link, useLocation } from "react-router-dom";
import { AboutIcon, DictIcon, ServicesIcon, TranslateIcon } from "../../icons";

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Lotin-Kirill",
      icon: <TranslateIcon className="translate-icon" />,
    },
    {
      id: 2,
      path: "/lugat",
      title: "Lug‘at",
      icon: <DictIcon />,
    },
    {
      id: 3,
      path: "/xizmatlar",
      title: "Xizmatlar",
      icon: <ServicesIcon />,
    },
    {
      id: 4,
      path: "/loyiha-haqida",
      title: "Loyiha haqida",
      icon: <AboutIcon />,
    },
  ];
  const { pathname } = useLocation();

  return (
    <ul className="site-nav__list">
      {links.map((link) => (
        <li className="site-nav__item" key={link.id}>
          <Link
            className={`site-nav__link ${
              pathname === link.path ? "active" : ""
            }`}
            to={link.path}
          >
            <span className="site-nav__icon">{link.icon}</span>
            <span className="site-nav__text">{link.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
