import { useCallback, useEffect, useMemo, useState } from "react";
import { useForceReRender } from "./hooks/useForceReRender";
import { useDebounce } from "./hooks/useDebounce";
import { getCityByCityName } from "./utils/getCities";
import Cities from "./components/Cities";
import UserDetail from "./components/UserDetail";

import "./styles/App.css";

function App() {
  const forceRerender = useForceReRender();
  const [city, setCity] = useState<string>(localStorage.getItem("city") ?? "");
  const debounceCity = useDebounce({ value: city, delay: 1000 });

  //  An example of appropriate optimization
  const allCities = useMemo(() => {
    return getCityByCityName(debounceCity);
  }, [debounceCity]);

  // An example of unnecessary & inappropriate optimization
  const first100Cities = useMemo(() => {
    return allCities?.slice(0, 100);
  }, [allCities]);

  // An example of unnecessary inappropriate optimization
  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    },
    [],
  );

  // An example of unnecessary & inappropriate optimization
  const handleResetCity = useCallback(() => {
    setCity("");
  }, []);

  useEffect(() => {
    localStorage.setItem("city", debounceCity);
  }, [debounceCity]);

  return (
    <>
      <button onClick={forceRerender}>Force Rerender</button>
      <div className="container">
        <UserDetail />
        <div className="cityContainer">
          <div>
            <label htmlFor="city">Find a City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
            />
            <button onClick={handleResetCity}>Clear</button>
          </div>
          <div>
            <Cities cities={first100Cities} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
