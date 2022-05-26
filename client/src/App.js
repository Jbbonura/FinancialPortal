import Dashboard from './Components/Dashboard'
import SideMenu from './Components/SideMenu';


import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div>
    <SideMenu />
    <Dashboard />
    </div>
      {/* <fieldset>
        <legend>App.js</legend>
        <Routes>
          <Dashboard />
        </Routes>
      </fieldset> */}
    </BrowserRouter>
  );
}

export default App;
