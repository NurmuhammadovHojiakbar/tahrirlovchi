import Page from "../../layout/page";
import Container from "../../layout/container";
import Hero from "../../components/hero";

const Home = () => {
  return (
    <Page title="Lotin-Kirill - Tahrirlovchi">
      <section className="main-page">
        <Hero />
        <Container style={{ background: "#eefff5" }}></Container>
      </section>
    </Page>
  );
};

export default Home;
