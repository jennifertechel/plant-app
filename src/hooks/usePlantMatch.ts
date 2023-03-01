import { useEffect, useState } from "react";
import { useQuiz } from "../Components/QuizContext";

interface Plant {
  family: string;
  toleratedlight: string;
  watering: string;
}

export const usePlantMatch = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const { direction, watering } = useQuiz();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5a97125199mshd7c16733b94e615p1ceb28jsna45f029facd6",
        "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
      },
    };

    fetch("https://house-plants.p.rapidapi.com/all", options)
      .then((response) => response.json())
      .then((response) => setPlants(response))
      .catch((err) => console.error(err));
  }, []);

  // filtrera plants baserat på direction & watering

  return plants;
};
