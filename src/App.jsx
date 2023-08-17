import Footer from "./components/footer";
import Header from "./components/header";
import Tied from "./components/tied-section";

function App() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Tied />
      </main>
      <Footer />
    </>
  );
}

export default App;
