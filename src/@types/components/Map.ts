import type { Coords } from "google-map-react";
import type { TypePlacesApi, TypeWeatherData } from "../";

export interface TypeMapProps {
  coordinates: Coords;
  setCoordinates: Function;
  setBounds: Function;
  places: TypePlacesApi[];
  setChildClicked: Function;
  weatherData: TypeWeatherData;
}