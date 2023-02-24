import { useEffect, useState } from "react";

interface Plant {
  Id: string;
  Family: string;
  Img: String;
}

export const usePlantMatch = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  console.log(plants);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "87e81293d5mshba5ad19194785afp1215dejsn6fc7c39235a5",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };

    fetch("https://house-plants2.p.rapidapi.com/all-lite", options)
      .then((response) => response.json())
      .then((response) => setPlants(response))
      .catch((err) => console.error(err));
  }, []);

  return plants.slice(0, 5);
};
