import './App.css'
import MapDashboard from './components/MapDashboard'
import Informations from './components/Informations'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewLogin from './components/Login.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MapDashboard />} />
          <Route path="/info/:doencaNome" element={<Informations />} />
          <Route path="/login" element={<NewLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;