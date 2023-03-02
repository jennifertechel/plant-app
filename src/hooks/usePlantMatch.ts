import { useEffect, useState } from "react";
import { useQuiz } from "../Components/QuizContext";

export interface Plant {
  common: string[];
  id: string;
  toleratedlight: string;
  watering: string;
  family: string;
  climate: string;
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

  // Filter plants based på direction and watering
  const filteredPlants = plants.filter((plant) => {
    const directionFilter =
      (direction.north && plant.toleratedlight.includes("/")) ||
      (direction.south && plant.toleratedlight.includes("Direct sunlight")) ||
      (direction.east && plant.toleratedlight.includes("Diffused")) ||
      (direction.west && plant.toleratedlight.includes("Direct sunlight"));

    const wateringFilter =
      (watering.easy &&
        plant.watering.includes(
          "Water only when the soil is dry. Must be dry between watering"
        )) ||
      (watering.medium &&
        plant.watering.includes(
          "Water when soil is half dry. Can be dry between watering."
        )) ||
      (watering.hard &&
        plant.watering.includes(
          "Keep moist between watering. Water when soil is half dry."
        ));

    return directionFilter && wateringFilter;
  });

  // Check if plant name is a duplicate
  const uniquePlants = Array.from(
    new Set(filteredPlants.map((plant) => plant.common[0]))
  ).map((common) => filteredPlants.find((plant) => plant.common[0] === common));

  console.log(filteredPlants);

  return uniquePlants;
};
