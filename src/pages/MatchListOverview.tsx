import { createUseStyles } from "react-jss";
import Card from "../Components/Card";
import ErrorBoundary from "../Components/ErrorBoundary";
import { usePlantMatch } from "../hooks/usePlantMatch";

function MatchListOverview() {
  const classes = useStyles();
  const plants = usePlantMatch();

  return (
    <>
      <main className={classes.main}>
        <h2>Your match:</h2>
        <ErrorBoundary>
          <div className={classes.container}>
            {plants.map((plant, index) => (
              <Card plant={plant} index={index} />
            ))}
          </div>
        </ErrorBoundary>
      </main>
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "70rem",
    "@media (max-width: 989px)": {
      width: "60rem",
    },
    "@media (max-width: 668px)": {
      width: "40rem",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default MatchListOverview;
