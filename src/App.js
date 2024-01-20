import "./App.css";
import ClientMatters from "./Components/ClientMatters";
import Courses from "./Components/Courses";
import Hero from "./Components/Hero";
import OurPopular from "./Components/OurPopular";
import Practice from "./Components/Practice";

function App() {
  return (
    <div>
      {/* <Hero /> */}
      <Practice />
      <Courses />
      <OurPopular />
      <ClientMatters />
    </div>
  );
}

export default App;
