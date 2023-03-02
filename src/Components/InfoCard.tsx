import "material-icons/iconfont/material-icons.css";
import { createUseStyles } from "react-jss";
import { Plant } from "../hooks/usePlantMatch";

function InfoCard({ plant }: { plant: Plant }) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <img
          src="/src/assets/images/plant.svg"
          alt="Picture of plant"
          style={{ width: "100%" }}
        />
      </div>

      <div className={classes.info}>
        <h3 className={classes.h3}>
          {plant.common.length > 1 ? plant.common[1] : plant.common[0]}
        </h3>
        <p className={classes.p}>
          <i className="material-icons-outlined">water_drop</i>
          {plant.watering}
        </p>
        <p className={classes.p}>
          <i className="material-icons-outlined">light_mode</i>
          {plant.toleratedlight}
        </p>
      </div>
    </main>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F0E1D4",
    width: "20rem",
    height: "25rem",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "2rem",
  },
  h3: {
    paddingTop: "0rem",
  },
  p: {
    display: "flex",
    justifyContent: "center",
  },
  padding: {
    paddingRight: "0.5rem",
  },
});

export default InfoCard;
