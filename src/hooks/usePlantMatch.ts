import { useEffect, useState } from "react";

export const usePlantMatch = () => {
  const [plants, setPlants] = useState([]);
  console.log(plants);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        // "X-RapidAPI-Key": "e8618a5b23mshf080c264a7ca9cdp1b2165jsn1f8716eb8c9e",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };

    fetch("https://house-plants2.p.rapidapi.com/all-lite", options)
      .then((response) => response.json())
      .then((response) => setPlants(response))
      .catch((err) => console.error(err));
  });

  return plants.slice(0, 5);
};
