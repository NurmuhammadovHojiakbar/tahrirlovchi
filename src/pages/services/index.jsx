import Page from "../../layout/page";
import Container from "../../layout/container";
import ServicesWrapper from "../../components/services";

const Services = () => {
  return (
    <Page title="Xizmatlar - Tahrirlovchi">
      <section className="services">
        <Container style={{ padding: "60px 0 75px" }}>
          <ServicesWrapper />
        </Container>
      </section>
    </Page>
  );
};

export default Services;
