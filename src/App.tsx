import { useEffect, useState } from "react";
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

  // Uncomment this code below to optimize the performance of this expensive calculation. Don't forget to import the useMemo package!
  // const allCities = useMemo(() => {
  //   return getCityByCityName(debounceCity);
  // }, [debounceCity]);

  const allCities = getCityByCityName(debounceCity);
  const first100Cities = allCities?.slice(0, 100);

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
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => setCity("")}>Clear</button>
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
