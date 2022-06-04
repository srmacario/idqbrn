import './App.css'
import MapDashboard from './components/MapDashboard'
import Informations from './components/Informations'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateCases from './components/UpdateCases';

function App() {
  return (
    /*<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapDashboard />} />
          <Route path="/info/:doencaNome" element={<Informations />} />
        </Routes>
      </BrowserRouter>
    </>*/
    <>
      <UpdateCases/>
    </>
  );
}

export default App;