import { createUseStyles } from "react-jss";
import ErrorBoundary from "../Components/ErrorBoundary";
import InfoCard from "../Components/InfoCard";

function PlantInfo() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <ErrorBoundary>
          <InfoCard />
        </ErrorBoundary>
        <div className={classes.buttonDiv}>
          {/* <FilledButton>Back</FilledButton> */}
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
