import type { TypePlaceDetailsProps } from '../@types';

const PlaceDetails = ({ place }: TypePlaceDetailsProps) => {
  return <h1>{place.name}</h1>;
};

export default PlaceDetails;
