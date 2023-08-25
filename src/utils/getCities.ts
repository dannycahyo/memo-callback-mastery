import cities from "../json/USCities.json";

const getAllCities = () => cities;

const getCityByCityName = (cityName: string) =>
  cities.find((city) => city.name === cityName);

export { getAllCities, getCityByCityName };
