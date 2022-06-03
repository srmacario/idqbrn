import './App.css'
import MapDashboard from './components/MapDashboard'
import Informations from './components/Informations'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapDashboard />} />
          <Route path="/info/:doencaNome" element={<Informations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;