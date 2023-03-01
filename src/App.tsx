import { Outlet } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import Header from "./Components/Header";
import { usePlantMatch } from "./hooks/usePlantMatch";

function App() {
  // API
  const plants = usePlantMatch();

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default App;
