import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { Header, List, Map, MetaHead } from '../components';
import { getPlacesData } from '../utils/api';
import type { Coords as TypeCoords } from 'google-map-react';
import type { TypePlacesApi, TypeBounds } from '../@types';

const initialCoords: TypeCoords = { lat: 0, lng: 0 };

const Home = () => {
  const [places, setPlaces] = useState<TypePlacesApi[]>([]);

  const [coordsLoaded, setCoordsLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState<TypeCoords>(initialCoords);
  const [bounds, setBounds] = useState<TypeBounds>({
    ne: initialCoords,
    sw: initialCoords,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);
  const [value, setValue] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
      setCoordsLoaded(true);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(value, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
      .finally(() => setIsLoading(false));
  }, [value, coordsLoaded, coordinates, bounds]);

  return (
    <div>
      <MetaHead title="Map Companion" />

      <Header />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            value={value}
            setValue={setValue}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          {coordsLoaded && (
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              places={places}
              setChildClicked={setChildClicked}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
