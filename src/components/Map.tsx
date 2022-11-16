import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from 'react';

import styles from './Map.module.css';
import type { TypeMapProps } from '../@types';

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}: TypeMapProps) => {
  const isDesktop = useMediaQuery('(min-width: 600px');

  return (
    <Box sx={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={() => {}}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, index) => {
          const lat = place.latitude;
          const lng = place.longitude;
          const rating = place.rating;
          if (lat && lng && rating) {
            return (
              // @ts-ignore
              <div className={styles.markerContainer} lat={+lat} lng={+lng} key={index}>
                {!isDesktop ? (
                  <LocationOnOutlineIcon color="secondary" fontSize="large" />
                ) : (
                  <Paper
                    elevation={3}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: '100px',
                    }}
                  >
                    <Typography variant="subtitle2" gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      style={{ cursor: 'pointer' }}
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                      }
                      alt={place.name}
                    />
                    <Rating size="small" value={+rating} readOnly />
                  </Paper>
                )}
              </div>
            );
          }
        })}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
