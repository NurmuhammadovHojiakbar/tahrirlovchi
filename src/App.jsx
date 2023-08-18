import Footer from "./components/footer";
import Header from "./components/header";
import Tied from "./components/tied-section";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Routes />
        <Tied />
      </main>
      <Footer />
    </>
  );
}

export default App;
