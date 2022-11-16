import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { Header, List, Map, MetaHead } from '../components';
import { getPlacesData } from '../utils/api';
import type { Coords as TypeCoords } from 'google-map-react';
import type { TypePlacesApi, TypeBounds } from '../@types';

const initialCoords: TypeCoords = { lat: 0, lng: 0 };

const Home = () => {
  const [coordsLoaded, setCoordsLoaded] = useState(false);
  const [places, setPlaces] = useState<TypePlacesApi[]>([]);
  const [coordinates, setCoordinates] = useState<TypeCoords>(initialCoords);
  const [bounds, setBounds] = useState<TypeBounds>({
    ne: initialCoords,
    sw: initialCoords,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
      setCoordsLoaded(true);
    });
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <div>
      <MetaHead title="Map Companion" />

      <Header />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {coordsLoaded && (
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
