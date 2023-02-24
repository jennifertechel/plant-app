import { createUseStyles } from "react-jss";
import { usePlantMatch } from "./hooks/usePlantMatch";
import StartPage from "./pages/StartPage";
// JSS EMPTY CONST

const useStyles = createUseStyles({});

function App() {
  // API
  const plants = usePlantMatch();

  return (
    <div>
      <StartPage />
    </div>
  );
}

export default App;
