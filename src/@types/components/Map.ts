import type { Coords } from "google-map-react";
import type { TypePlacesApi } from "../";

export interface TypeMapProps {
  coordinates: Coords;
  setCoordinates: Function;
  setBounds: Function;
  places: TypePlacesApi[];
  setChildClicked: Function;
}