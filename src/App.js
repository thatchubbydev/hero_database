import React from "react";
import { useState } from "react";
import Filter from "./Filter";
// import { Users } from "./Users";

import Profile from "./Profile";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const [query, setQuery] = useState("");
  const [newData, setnewData] = useState({ data });
  const search = (newData) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  const filter = (button) => {
    const filteredData = data
      .filter((item) => item.appearance.gender === button)
      .map((item) => item.appearance.gender);
    setnewData(filteredData);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center text-white m-8">
        SUPERHERO DATABASE
      </h1>
      <div className="flex justify-center m-10">
        <input
          type="text"
          className="p-2 border-black shadow-lg shadow-indigo-500/40 w-1/4 rounded-full text-center md:text-2xl sm:text-xs"
          placeholder="Enter hero name"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <Profile/> */}
      </div>
      <Filter filter={newData} />
      <Profile newData={search(newData)} />
    </div>
  );
};

export default App;
