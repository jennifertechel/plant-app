import { createUseStyles } from "react-jss";
import { usePlantMatch } from "./hooks/usePlantMatch";
// JSS EMPTY CONST

const useStyles = createUseStyles({});

function App() {
  // API
  const plants = usePlantMatch();

  return (
    <div>
      <h1>PlantMatch</h1>
    </div>
  );
}

export default App;
