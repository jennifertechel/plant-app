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
          <div className={classes.grid_box}>
            <div className={classes.row}>
              <Card />
              <Card />
            </div>
            <div className={classes.row}>
              <Card />
              <Card />
            </div>
            <div className={classes.row}>
              <Card />
              <Card />
            </div>
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
    justifyContent: "center",
    alignItems: "center",
  },
  grid_box: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 955px)": {
      flexWrap: "wrap",
      flexDirection: "row",
    },
    "@media (max-width: 655px)": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  row: {
    "@media (max-width: 955px)": {
      display: "flex",
    },
    "@media (max-width: 655px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export default MatchListOverview;
