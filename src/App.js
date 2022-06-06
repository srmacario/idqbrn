import './App.css'
import MapDashboard from './components/MapDashboard'
import Informations from './components/Informations'
import UpdateInformation from './components/UpdateInformation'
import UserDashboard from './components/UserDashboard'
import UpdateCases from './components/UpdateCases'
import UpdateInfoDisease from './components/UpdateInfoDisease'
import UploadFile from './components/UploadFile'
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
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/update_info/:doencaNome" element={<UpdateInformation />} />
          <Route path="/update_cases" element={<UpdateCases />} />
          <Route path="/update_info" element={<UpdateInfoDisease />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

