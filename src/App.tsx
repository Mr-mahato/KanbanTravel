import Headers from "./components/Headers";
import Home from "./pages/Home";
import SideBar from "./Models/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className={`transition-all w-full`}>
        <Headers />
        <Home />
      </div>
    </div>
  );
}

export default App;
