import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="flex flex-col bg-red-00 overflow-hidden">
        <div className={`container max-w-[1240px] m-auto px-2 md:p-0`}>
          <Hero />
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
