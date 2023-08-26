import { matchSorter } from "match-sorter";
import cities from "../json/USCities.json";

import type { City } from "../types/City";

const getCityByCityName = (cityName: string): City[] => {
  if (cityName) {
    return matchSorter(cities, cityName, {
      keys: ["name"],
    });
  } else {
    return cities;
  }
};

export { getCityByCityName };
