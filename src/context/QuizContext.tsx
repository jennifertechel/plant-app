import { createContext, ReactNode, useContext, useState } from "react";

interface Direction {
  north: boolean;
  south: boolean;
  east: boolean;
  west: boolean;
}

interface Watering {
  easy: boolean;
  medium: boolean;
  hard: boolean;
}

interface QuizContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
  watering: Watering;
  setWatering: (watering: Watering) => void;
}

export const QuizContext = createContext<QuizContextType>(null as any);

interface Props {
  children: ReactNode;
}

export const QuizProvider: React.FC<Props> = ({ children }) => {
  const [direction, setDirection] = useState<Direction>({
    north: false,
    south: false,
    east: false,
    west: false,
  });

  const [watering, setWatering] = useState<Watering>({
    easy: false,
    medium: false,
    hard: false,
  });

  const contextValue = {
    direction,
    setDirection,
    watering,
    setWatering,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
