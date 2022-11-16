import type { Coords } from "google-map-react";

export interface TypeMapProps {
  coordinates: Coords;
  setCoordinates: Function;
  setBounds: Function;
}