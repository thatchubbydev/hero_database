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

  const menuItems = [...new Set(data.map((Val) => Val.appearance.gender))];
  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.appearance.gender === curcat;
    });
    setnewData(newItem);
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-5xl text-center text-white m-8">
        SUPERHERO DATABASE
      </h1>
      <div className="flex justify-center mx-20 m-10">
        <input
          type="text"
          className="p-2 flex-auto w-16 border-black shadow-lg  shadow-indigo-500/40 rounded-xl text-center md:text-2xl sm:text-sm xs:text-xs"
          placeholder="Enter hero name"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <Profile/> */}
      </div>
      <Filter
        menuItems={menuItems}
        setNewData={setnewData}
        newData={data}
        filterItem={filterItem}
      />
      <Profile newData={search(newData)} />
    </div>
  );
};

export default App;
