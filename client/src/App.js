import Sidebar from './Components/SideMenu'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Views/Login';
import Register from './Views/Register';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
