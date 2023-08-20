import HeroRelativeImage from "../../assets/images/hero-dishes.png";
import HeroAnimatedImage from "../../assets/images/hero-book.png";
import useWindowScroll from "../../hooks/useWindowScroll";
import "./hero.scss";

const Hero = () => {
  const { scrollY } = useWindowScroll();

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <img
          className={`hero-img animated ${scrollY > 50 ? "active" : ""}`}
          src={HeroAnimatedImage}
          width={937}
          height={345}
        />
        <img
          className="hero-img relative"
          src={HeroRelativeImage}
          width={937}
          height={345}
        />
      </div>
      <div className="hero-linear">
        <div className="container">
          <p className="hero-linear__text">Tahrirlovchi loyihasiga</p>
          <h1 className="hero-linear__title">Xush kelibsiz!</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
