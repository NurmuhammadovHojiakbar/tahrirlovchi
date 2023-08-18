import UsefulSites from "./useful-sites";
import "./tied.scss";
import Contact from "./contact";

const Tied = () => {
  return (
    <section className="site-tied">
      <div className="container">
        <UsefulSites />
        <Contact />
      </div>
    </section>
  );
};

export default Tied;
