import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import TimeLine from './components/Timeline';
import Add from './components/Add';

import './App.styl';

function App() {
  return (
    <div className="qu-app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimeLine />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
