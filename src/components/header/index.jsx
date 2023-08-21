import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/site-logo.png";
import Navigation from "./navigation";
// import Controller from "./controller";
import "./header.scss";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container site-header__container">
        <div className="site-logo">
          <Link className="site-logo__link" to="/">
            <img
              className="site-logo__img"
              src={LogoImg}
              alt="Logo Icon"
              width={125}
              height={40}
            />
          </Link>
        </div>
        <nav className="site-nav">
          <Navigation />
        </nav>
        {/* <Controller /> */}
      </div>
    </header>
  );
};

export default Header;
