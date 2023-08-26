import { useEffect, useState } from "react";
import { useForceReRender } from "./hooks/useForceReRender";
import { useDebounce } from "./hooks/useDebounce";
import { getCityByCityName } from "./utils/getCities";
import Cities from "./components/Cities";

function App() {
  const forceRerender = useForceReRender();
  const [city, setCity] = useState<string>(localStorage.getItem("city") ?? "");
  const debounceCity = useDebounce({ value: city, delay: 1000 });

  // Uncomment this code below to optimize the performance of this expensive calculation.
  // const allCities = useMemo(() => {
  //   return getCityByCityName(debounceCity);
  // }, [debounceCity]);

  const allCities = getCityByCityName(debounceCity);
  const first100Cities = allCities?.slice(0, 100);

  useEffect(() => {
    if (!localStorage.getItem("city")) {
      localStorage.setItem("city", debounceCity);
    } else {
      localStorage.setItem("city", debounceCity);
    }
  }, [debounceCity]);

  return (
    <div>
      <button onClick={forceRerender}>Force Rerender</button>
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
  );
}

export default App;
