import Page from "../../layout/page";
import Container from "../../layout/container";
import DictionaryWrapper from "../../components/dictionary";

const Dictionary = () => {
  return (
    <Page title="Lug‘at - Tahrirlovchi">
      <section className="dictionary">
        <Container style={{ background: "#eefff5", padding: "54px 0 74px" }}>
          <DictionaryWrapper />
        </Container>
      </section>
    </Page>
  );
};

export default Dictionary;
