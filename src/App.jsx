import Footer from "./components/Footer";
import Info from "./components/Info";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Intro />
        <Info />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
