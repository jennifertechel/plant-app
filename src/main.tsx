import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { QuizProvider } from "./Components/QuizContext";
import "./main.css";
import MatchListOverview from "./pages/MatchListOverview";
import PlantInfo from "./pages/PlantInfo";
import QuizPageOne from "./pages/QuizPageOne";
import QuizPageTwo from "./pages/QuizPageTwo";
import StartPage from "./pages/StartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="quizpageone" element={<QuizPageOne />} />
      <Route path="quizpagetwo" element={<QuizPageTwo />} />
      <Route path="matchlistoverview" element={<MatchListOverview />} />
      <Route path="plantinfo/:id" element={<PlantInfo />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  </React.StrictMode>
);
