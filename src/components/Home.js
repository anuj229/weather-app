import React, { useEffect, useState } from "react";
import "./css/style.css";
const Home = () => {
  const [search, setSearch] = useState("Mumbai");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a47234c1fafe2497eb46ac2c21a38275`;
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data.main);
      setCity(data.main);
    };
    fetchData();
  }, [search]);

  return (
    <div className="container">
      <div className="box">
        <div className="inputBox">
          <input
            id="input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="textBox">
          {!city ? (
            <p>no city found</p>
          ) : (
            <div className="info">
              <h1>{search}</h1>
              <h2>{city.temp} C</h2>
              <h3>
                Min: {city.temp_min} | Max: {city.temp_max}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
