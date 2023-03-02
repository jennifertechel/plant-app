import { createUseStyles } from "react-jss";
import Card from "../Components/Card";
import ErrorBoundary from "../Components/ErrorBoundary";

function MatchListOverview() {
  const classes = useStyles();

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
