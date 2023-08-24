import { useSelector } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import Tied from "./components/tied-section";
import Routes from "./routes";
import SuggestionModal from "./components/suggestion-modal";

function App() {
  const { isSuggested } = useSelector((store) => store.editorState);
  return (
    <>
      <Header />
      {/* <main className="site-main">
        <Routes />
        <Tied />
      </main> */}
      <Footer />
      {isSuggested && <SuggestionModal />}
    </>
  );
}

export default App;
