import { useEffect, useState } from "react";
import { useQuiz } from "../Components/QuizContext";

interface Plant {
  Id: string;
  Family: string;
  Img: String;
}

export const usePlantMatch = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const { direction } = useQuiz();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e8618a5b23mshf080c264a7ca9cdp1b2165jsn1f8716eb8c9e",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };

    fetch("https://house-plants2.p.rapidapi.com/all-lite", options)
      .then((response) => response.json())
      .then((response) => setPlants(response))
      .catch((err) => console.error(err));
  }, []);

  // filtrera plants baserat på direction & watering

  return plants.slice(0, 5);
};
