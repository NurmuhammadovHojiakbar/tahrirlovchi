import { useState } from "react";

const SpecialView = () => {
  const [range, setRange] = useState(0);

  const filterHandler = (newClass) => {
    document.body.className = newClass;
  };

  const rangeHandler = (e) => {
    const newVal = e.target.value;
    setRange(newVal);
    document.documentElement.style.setProperty("--font-size", newVal);
  };

  return (
    <div className="special-view">
      <div className="special-view__filter">
        <h2 className="special-view__title">Ko‘rinish</h2>
        <div className="special-view__buttons">
          <button
            className="special-view__button default"
            onClick={() => filterHandler("default")}
          >
            A
          </button>
          <button
            className="special-view__button grey"
            onClick={() => filterHandler("grey")}
          >
            A
          </button>
          <button
            className="special-view__button invert"
            onClick={() => filterHandler("invert")}
          >
            A
          </button>
        </div>
      </div>
      <div className="special-view__size">
        <h2 className="special-view__title">Shrift o‘chami</h2>
        <p className="special-view__info">{range}% ga kattalashtirish</p>
        <input
          className="special-view__range"
          type="range"
          min={0}
          max={100}
          value={range}
          onChange={rangeHandler}
        />
      </div>
    </div>
  );
};

export default SpecialView;
