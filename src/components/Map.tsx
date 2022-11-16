import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';

const Map = () => {
  const isMobile = useMediaQuery('(min-width: 600px');
  const coordinates = { lat: 0, lng: 0 };

  return (
    <Box sx={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={() => {}}
        // onChange={() => {}}
        // onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
