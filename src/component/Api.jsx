import React, { useState } from "react";

import "../Stlye/Api.css"
import "bootstrap/dist/css/bootstrap.css"

const Api = () => {
  let api = {
    key: "18cd3a8fb5ac052ece5d7c5d29ccaa6a",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  let [search, setSearch] = useState("");
  let [weather, setweather] = useState("");
  function locsearch() {
    fetch(`${api.base}?q=${search} &appid=${api.key}&unit=matic`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setweather(data);
      });
  }
  return (
    <div className="card shadow-lg p-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <input
        type="text"
        className="form-control me-2"
        id="locationSearch"
        placeholder="Search location"
        aria-label="Search for a location"
        onChange={e => setSearch(e.target.value)}
      />
      <button
        onClick={locsearch}
        className="btn btn-primary search-btn"
        aria-label="Search"
        disabled={!search}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
          width={20}
          alt="Search icon"
        />
      </button>
    </div>
  
    <section id="weather" className="text-center">
      {weather.main !== undefined ? (
        <div className="fade-in">
          <h1 className="display-4">{weather.main.temp}°C</h1>
          <h2 className="fw-light">&#x1F5FA; {weather.name}</h2>
        </div>
      ) : (
        <p className="text-muted">No data found</p>
      )}
    </section>
  </div>
  
  );
};

export default Api;

// https://www.interviewbit.com/html-interview-questions/
// iframes
// https://github.com/adwaitya/html5-interview-questions
// https://github.com/sudheerj/javascript-interview-questions
// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
