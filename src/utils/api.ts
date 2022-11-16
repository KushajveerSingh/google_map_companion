import axios from 'axios';
import type { Coords } from 'google-map-react';

export const getPlacesData = async (sw: Coords, ne: Coords) => {
  try {
    const { data: { data } } = await axios.get(
      'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TRAVEL_ADVISOR_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    )
    return data;
  } catch (error) {
    console.log(error);
  }
};
