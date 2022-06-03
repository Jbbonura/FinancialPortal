import Dashboard from './Components/Dashboard'
import SideMenu from './Components/SideMenu';


import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Views/Login';
import Register from './Views/Register';


function App() {
  return (
    <BrowserRouter>
    <div>
    <SideMenu />
    <Dashboard />
    </div>
    </BrowserRouter>
  );
}

export default App;
