import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { Header, List, Map, MetaHead } from '../components';
import { getPlacesData, getWeatherData } from '../api';
import type { Coords as TypeCoords } from 'google-map-react';
import type { TypePlacesApi, TypeBounds, TypeWeatherData } from '../@types';

const initialCoords: TypeCoords = { lat: 0, lng: 0 };

const Home = () => {
  const [places, setPlaces] = useState<TypePlacesApi[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<TypePlacesApi[]>([]);
  const [weatherData, setWeatherData] = useState<TypeWeatherData>([]);

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
    const filteredPlaces = places.filter((place) =>
      place.rating ? place.rating > rating : false
    );
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw.lat != 0 && bounds.sw.lng != 0) {
      setIsLoading(true);

      getWeatherData(coordinates.lat, coordinates.lng, bounds).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(value, bounds.sw, bounds.ne)
        .then((data) => {
          if (data) {
            setPlaces(
              data.filter(
                (place: TypePlacesApi) =>
                  place.name && place.num_reviews && +place.num_reviews > 0
              )
            );
          }
          setFilteredPlaces([]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [value, bounds]);

  return (
    <div>
      <MetaHead title="Map Companion" />

      <Header setCoordinates={setCoordinates} />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
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
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
              weatherData={weatherData}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
