import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';

import type { TypeMapProps } from '../@types';

const Map = ({ coordinates, setCoordinates, setBounds }: TypeMapProps) => {
  const isMobile = useMediaQuery('(min-width: 600px');

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
        // onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
