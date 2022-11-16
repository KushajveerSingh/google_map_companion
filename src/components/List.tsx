import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

import { PlaceDetails } from './';

const List = () => {
  const theme = useTheme();
  const [value, setValue] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool place' },
    { name: 'Best beer' },
    { name: 'Best Steak' },
    { name: 'Cool place' },
    { name: 'Best beer' },
    { name: 'Best Steak' },
    { name: 'Cool place' },
    { name: 'Best beer' },
    { name: 'Best Steak' },
  ];

  return (
    <Box sx={{ padding: '25px' }}>
      <Typography variant="h4">
        Restaurants, Hotels &amp; Attractions around you
      </Typography>

      <FormControl
        sx={{ margin: `${theme.spacing(1)}`, minWidth: 120, marginBottom: '30px' }}
      >
        <InputLabel>Type</InputLabel>
        <Select value={value} onChange={(e) => setValue(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ margin: `${theme.spacing(1)}`, minWidth: 120, marginBottom: '30px' }}
      >
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Aboce 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto' }}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
