import React, { useState } from 'react';
import Mapa from './Mapa'
import MenuNav from './MenuNav'
import CityMarker from '../CityMarker';
import { useNavigate } from 'react-router-dom';

function MapDashboard() {
  const initialMarkers = [new CityMarker(-1, "Nada", 0, -14.613282, -48.484189)];
  const [markersArray, setMarkers] = useState(initialMarkers);

  const navigate = useNavigate();
  return (
    <>
      <MenuNav markersArray={markersArray} setMarkers={setMarkers} navigate={navigate} />
      <Mapa markersArray={markersArray} />
    </>
  );
}

export default MapDashboard;