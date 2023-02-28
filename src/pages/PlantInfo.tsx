import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import FilledButton from "../Components/FilledButton";
import InfoCard from "../Components/InfoCard";

function PlantInfo() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <InfoCard />
        <div className={classes.buttonDiv}>
          <NavLink to="/matchlistoverview">
            <FilledButton text="Next" />
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
