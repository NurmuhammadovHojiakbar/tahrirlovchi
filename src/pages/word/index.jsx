import Page from "../../layout/page";
import Container from "../../layout/container";
import WordDescription from "../../components/word-description";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Word = () => {
  const { word } = useParams();

  return (
    <Page title={`${word} - Tahrirlovchi`}>
      <Helmet>
        <meta name="keywords" content={word} />
      </Helmet>
      <section className="word">
        <Container style={{ background: "#eefff5", padding: "54px 0 74px" }}>
          <WordDescription />
        </Container>
      </section>
    </Page>
  );
};

export default Word;
