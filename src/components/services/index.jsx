import NumToWords from "./num-to-words";
import TranslateFiles from "./translate-files";
import "./services.scss";

const ServicesWrapper = () => {
  return (
    <div className="container services-container">
      <div className="services-wrapper">
        <div className="services-wrapper__left">
          <NumToWords />
          <TranslateFiles />
        </div>
        <div className="services-wrapper__right"></div>
      </div>
    </div>
  );
};

export default ServicesWrapper;
