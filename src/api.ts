import axios from 'axios';
import type { Coords } from 'google-map-react';
import type { TypeBounds, TypeWeatherData } from './@types';

export const getPlacesData = async (value: string, sw: Coords, ne: Coords) => {
  try {
    const { data: { data } } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${value}/list-in-boundary`,
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

const getRandomCoords = (start: number, end: number, numCoords: number) => {
  const data = [];
  while (numCoords--) {
    data.push(+(Math.random() * (end - start) + start).toFixed(4));
  }
  return data;
};

const weatherQuery = async (lat: number, lng: number) => {
  try {
    const { data } = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json',
      {
        params: {
          q: `${lat},${lng}`
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WEATHER_API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      });
    return `https://${data['current']['condition']['icon']}`;
  } catch (error) {
    console.log(error);
  }
  return -1;
};

export const getWeatherData = async (lat: number, lng: number, bounds: TypeBounds, numCoords: number = 5) => {
  const lats = getRandomCoords(bounds.sw.lat, bounds.ne.lat, numCoords);
  const lngs = getRandomCoords(bounds.sw.lng, bounds.ne.lng, numCoords);

  lats.push(lat);
  lngs.push(lng);

  const data: TypeWeatherData = [];

  for (let i = 0; i < lats.length; i++) {
    const d = await weatherQuery(lats[i], lngs[i]);

    if (typeof d == 'string') {
      data.push([lats[i], lngs[i], d])
    }
  }

  return data;
}
