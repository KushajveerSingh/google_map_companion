import type { TypePlacesApi } from "../";

export interface TypeListProps {
  places: TypePlacesApi[];
  childClicked: string | null;
  isLoading: boolean;
  value: string;
  setValue: Function;
  rating: string;
  setRating: Function;
}