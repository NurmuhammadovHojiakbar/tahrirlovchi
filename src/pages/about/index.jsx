import Page from "../../layout/page";
import Container from "../../layout/container";
import AboutApp from "../../components/about-app";

const About = () => {
  return (
    <Page title="Loyiha haqida - Tahrirlovchi">
      <section className="about">
        <Container style={{ padding: "70px 0 75px" }}>
          <AboutApp />
        </Container>
      </section>
    </Page>
  );
};

export default About;
