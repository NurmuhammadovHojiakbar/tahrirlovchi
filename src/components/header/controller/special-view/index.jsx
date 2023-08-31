const SpecialView = () => {
  const filterHandler = (newClass) => {
    document.body.className = newClass;
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
      </div>
    </div>
  );
};

export default SpecialView;
