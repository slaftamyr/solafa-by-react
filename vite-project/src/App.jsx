// App.js
import "./compoment/SideBar/SideBar.css";
import "./compoment/home/Home.css";
import SideBar from "./compoment/SideBar/SideBar";
import Home from "./compoment/home/Home";
import "./App.css";
import AboutMe from "./compoment/About me/AboutMe";
import { useSwitchKey } from "./compoment/const";
import MyCertificate from "./compoment/My Certificate/MyCertificate";
import MyProjects from "./compoment/MyProjects/MyProjects";

function App() {
  const { switchKey, setSwitchKey } = useSwitchKey();

  return (
    <>
      <div className="mainContent">
        <SideBar setSwitchKey={setSwitchKey} />
        {switchKey === 0 && <Home />}
        {switchKey === 1 && <AboutMe />}
        {switchKey === 2 && <MyCertificate />}
        {switchKey === 3 && <MyProjects />}
      </div>
    </>
  );
}

export default App;
