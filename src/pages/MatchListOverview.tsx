import { createUseStyles } from "react-jss";
import Card from "../Components/Card";
import ErrorBoundary from "../Components/ErrorBoundary";
import { usePlantMatch } from "../hooks/usePlantMatch";

function MatchListOverview() {
  const classes = useStyles();
  const plants = usePlantMatch().slice(0, 6);
  return (
    <>
      <main className={classes.main}>
        <h2>Your match:</h2>
        <ErrorBoundary>
          <div>
            <Card />
          </div>
        </ErrorBoundary>
      </main>
    </>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default MatchListOverview;
