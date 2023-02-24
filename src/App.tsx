import { Outlet } from "react-router-dom";
import { usePlantMatch } from "./hooks/usePlantMatch";

function App() {
  // API
  const plants = usePlantMatch();

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
