import { createUseStyles } from "react-jss";

function MatchListOverview() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2>This is Match List Overview</h2>
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
});

export default MatchListOverview;
