import { createUseStyles } from "react-jss";

function PlantInfo() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2>This is Plant Info</h2>
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

export default PlantInfo;
