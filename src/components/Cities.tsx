import type { FC } from "react";
import { City } from "../types/City";

type CitiesProps = {
  cities: City[];
};

const Cities: FC<CitiesProps> = ({ cities }) => {
  return (
    <ul>
      {cities?.map((city) => (
        <li key={city.lat}>{city.name}</li>
      ))}
    </ul>
  );
};

export default Cities;
