import About from "./components/About";
import Experience from "./components/Experience";
import SEO from "./components/SEO";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <SEO />
      <div className="container mx-auto flex h-full flex-col overflow-scroll p-8 text-white lg:flex-row lg:p-0">
        <Sidebar />
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-24">
          <About />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
