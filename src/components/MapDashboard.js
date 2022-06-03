import React from 'react';
import Mapa from './Mapa'
import MenuNav from './MenuNav'
import { useState } from 'react';
import CityMarker from '../CityMarker';

function MapDashboard() {
  const initialMarkers = [new CityMarker(0, "Nada", 0, -14.613282, -48.484189)];
  //const state = { markersState: [] };
  //state.markersState = initialMarkers;
  const [markersArray, setMarkers] = useState(initialMarkers);
  return (
    <>
      <MenuNav markersArray={markersArray} setMarkers={setMarkers} />
      <Mapa markersArray={markersArray} />
    </>
  );
}

export default MapDashboard;