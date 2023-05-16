import "./App.css";
import ControlMenu from "./components/ControlMenu/ControlMenu";
import SearchBox from "./components/SearchBox/SearchBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace";
import Wrap from "./components/Wrap/Wrap";
import WrapHeader from "./components/Wrap/WrapHeader";

function App() {
  return (
    <>
      <WrapHeader>
        <ControlMenu />
        <SearchBox />
      </WrapHeader>

      <Wrap>
        <Sidebar />
        <Workspace />
      </Wrap>
    </>
  );
}

export default App;
