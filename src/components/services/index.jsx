import NumToWords from "./num-to-words";
import TranslateFiles from "./translate-files";
import "./services.scss";
import ImageToText from "./image-to-text";

const ServicesWrapper = () => {
  return (
    <div className="container services-container">
      <div className="services-wrapper">
        <div className="services-wrapper__left">
          <NumToWords />
          <TranslateFiles />
        </div>
        <div className="services-wrapper__right">
          <ImageToText />
        </div>
      </div>
    </div>
  );
};

export default ServicesWrapper;
