import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundary";
import InfoCard from "../Components/InfoCard";
import { usePlantMatch } from "../hooks/usePlantMatch";

function PlantInfo() {
  const classes = useStyles();
  const params = useParams();
  const plants = usePlantMatch();
  const plant = plants.find((plant) => plant.id == params.id);

  if (!plant) return <p></p>;

  return (
    <main className={classes.main}>
      <ErrorBoundary>
        <InfoCard plant={plant} />
      </ErrorBoundary>
    </main>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    width: "70%",
    marginTop: "2rem",
  },
});

export default PlantInfo;
