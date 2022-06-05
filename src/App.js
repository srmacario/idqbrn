import './App.css'
import MapDashboard from './components/MapDashboard'
import Informations from './components/Informations'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/info/:doencaNome" element={<Informations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;