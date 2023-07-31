import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  const myName = "Flipkart";
  return (
    <>
      <Navigation  name={myName} />
      <HeroSection line={"shahzil"}/>
    </>
  );
};

export default App;