import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import Login from './pages/Login';

import './App.styl';

// TODO 弄清楚react router如何做history
// TODO 提供初始状态页面，提供checklogin接口，校验登录状态

function App() {
  return (
    <div className="life-app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
