import PropTypes from "prop-types";

const ServicesHeader = ({ title, isLatin, setIsLatin }) => {
  return (
    <header className="services-header">
      <div className="services-header__lang">
        <label className="services-header__label">
          <input
            type="checkbox"
            className="visually-hidden services-header__input"
            checked={isLatin}
            onChange={() => setIsLatin(true)}
          />
          <span className="services-header__text">O‘z</span>
        </label>
        <label className="services-header__label">
          <input
            type="checkbox"
            className="visually-hidden services-header__input"
            checked={!isLatin}
            onChange={() => setIsLatin(false)}
          />
          <span className="services-header__text">Ўз</span>
        </label>
      </div>

      <h2 className="services-header__title">{title}</h2>
    </header>
  );
};

ServicesHeader.propTypes = {
  title: PropTypes.string,
  isLatin: PropTypes.bool,
  setIsLatin: PropTypes.func,
};

export default ServicesHeader;
