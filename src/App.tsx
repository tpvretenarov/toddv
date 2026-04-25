import About from "./components/About";
import Experience from "./components/Experience";
import SEO from "./components/SEO";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <SEO />
      <div className="container mx-auto flex h-full flex-col p-8 text-white antialiased lg:h-auto lg:flex-row lg:items-start lg:p-0">
        <Sidebar />
        <div className="w-full lg:w-1/2 lg:py-12 lg:pr-24 lg:pl-8 xl:py-28">
          <About />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
