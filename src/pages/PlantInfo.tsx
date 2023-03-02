import { createUseStyles } from "react-jss";
import { Link, useParams } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundary";
import FilledButton from "../Components/FilledButton";
import InfoCard from "../Components/InfoCard";
import { usePlantMatch } from "../hooks/usePlantMatch";

function PlantInfo() {
  const classes = useStyles();
  const params = useParams();
  const plants = usePlantMatch();
  const plant = plants.find((plant) => plant.id == params.id);

  if (!plant) return <p>Växten finns inte....</p>;

  return (
    <main className={classes.main}>
      <ErrorBoundary>
        <InfoCard plant={plant} />
      </ErrorBoundary>
      <div className={classes.buttonDiv}>
        <Link to="/matchlistoverview">
          <FilledButton text="Back" />
        </Link>
      </div>
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
