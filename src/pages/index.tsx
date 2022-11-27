import { useEffect, useState } from 'react';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

import { Header, List, Map, MetaTags } from '../components';
import { getPlacesData, getWeatherData } from '../api';
import type { Coords as TypeCoords } from 'google-map-react';
import type { TypePlacesApi, TypeBounds, TypeWeatherData } from '../@types';

const initialCoords: TypeCoords = { lat: 0, lng: 0 };

const Home = () => {
  const [places, setPlaces] = useState<TypePlacesApi[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<TypePlacesApi[]>([]);
  const [weatherData, setWeatherData] = useState<TypeWeatherData>([]);
  const [errorDialog, setErrorDialog] = useState(0);

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
          if (typeof data === 'string' && data == 'err') {
            setErrorDialog((prev) => prev + 1);
          } else {
            if (data) {
              setPlaces(
                data.filter(
                  (place: TypePlacesApi) =>
                    place.name && place.num_reviews && +place.num_reviews > 0
                )
              );
            }
            setFilteredPlaces([]);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [value, bounds]);

  return (
    <>
      <MetaTags
        title="Map Companion"
        description="Fully-responsive travel companion and weather checking app built by combining Google Maps API, Travel Advisor API and WeatherAPI.com. Built using Next.js and TypeScript, this app can be used to search for places, fetch restaurant, hotels and attractions based on location."
        url="https://github.com/KushajveerSingh/google_map_companion"
        image="/demo_image.png"
      />

      <Header setCoordinates={setCoordinates} />

      <Dialog
        open={errorDialog == 1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Cannot show places and attraction on Map.'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`This project uses "Travel Advisor API" which provides 500 requests per month for free. If you are seeing this message, then it means this website has reached the quota and you cannot view the restaurants and attractions. The API quota refreshes on 17th of every month (EST).`}
            <br />
            <br />
            {`You can still use the google map search in the top-right corner and see the weather around that place. Sorry for the inconvenience.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setErrorDialog((prev) => prev + 1)}>Close</Button>
        </DialogActions>
      </Dialog>

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
    </>
  );
};

export default Home;
