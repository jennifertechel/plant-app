import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundary";
import FilledButton from "../Components/FilledButton";
import InfoCard from "../Components/InfoCard";
import { Plant } from "../hooks/usePlantMatch";

function PlantInfo({ plant }: { plant: Plant }) {
  const classes = useStyles();

  return (
    <>
      <main className={classes.main}>
        <ErrorBoundary>
          <InfoCard plant={plant} />
        </ErrorBoundary>
        <div className={classes.buttonDiv}>
          <NavLink to="/matchlistoverview">
            <FilledButton text="Back" />
          </NavLink>
        </div>
      </main>
    </>
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
