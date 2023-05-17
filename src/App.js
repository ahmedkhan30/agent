import "./App.css";
import Intro from "./Components/Intro";
import Header from "./Components/Header";
import LLC from "./Components/LLC";
// import Service from "./Components/Service";
import GetStarted from "./Components/GetStarted";
import AgentInfor from "./Components/AgentInfor";
import Footer from "./Components/Footer";
import BigCard from "./Components/BigCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <BigCard/>
      <LLC />
      {/* <Service /> */}
      <AgentInfor/>
      <GetStarted />
      <Footer/>
    </div>
  );
}

export default App;
