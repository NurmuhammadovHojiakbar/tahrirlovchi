import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../../assets/images/site-logo.png";
import Navigation from "./navigation";
import Controller from "./controller";
import Search from "../search";
import { HumCloseIcon, HumIcon } from "../icons";
import "./header.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setIsMobile(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__container">
        <div className="site-header__container-static">
          <button className="site-hum" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <HumCloseIcon /> : <HumIcon />}
          </button>
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
          <nav className={`site-nav ${isMobile ? "active" : ""}`}>
            <Navigation />
          </nav>
          <Controller search={open} setSearch={setOpen} />
        </div>
        {open && (
          <div className="site-header__container-dynamic">
            <Search />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
