import { createUseStyles } from "react-jss";
import InfoCard from "../Components/InfoCard";

function PlantInfo() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2>This is Plant Info</h2>
      </main>
      <InfoCard />
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
