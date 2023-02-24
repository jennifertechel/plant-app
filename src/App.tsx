import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { usePlantMatch } from "./hooks/usePlantMatch";

function App() {
  // API
  const plants = usePlantMatch();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
