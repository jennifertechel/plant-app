import "material-icons/iconfont/material-icons.css";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Plant } from "../hooks/usePlantMatch";
import FilledButton from "./FilledButton";

function InfoCard({ plant }: { plant: Plant }) {
  const classes = useStyles();
  const [imageSrc, setImageSrc] = useState(
    "/src/assets/images/plant-green.svg"
  );

  const handleClick = () => {
    if (imageSrc === "/src/assets/images/plant-green.svg") {
      setImageSrc("/src/assets/images/plant-pink.svg");
    } else {
      setImageSrc("/src/assets/images/plant-green.svg");
    }
  };

  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <span className={classes.span}>click on the plant!</span>

        <img
          src={imageSrc}
          alt="Picture of plant"
          style={{ width: "100%" }}
          onClick={handleClick}
        />
      </div>

      <div className={classes.info}>
        <h3 className={classes.h3}>{plant.latin}</h3>
        <h5>{plant.common.length > 1 ? plant.common[1] : plant.common[0]}</h5>

        <div className={classes.right}>
          <div className={classes.p}>
            <i className="material-icons-outlined">water_drop</i>
            <p className={classes.margin}>{plant.watering}</p>
          </div>
          <div className={classes.p}>
            <i className="material-icons-outlined">light_mode</i>
            <p className={classes.margin}>{plant.toleratedlight}</p>
          </div>
          <div className={classes.p}>
            <i className="material-icons-outlined">eco</i>
            <p className={classes.margin}>{plant.family}</p>
          </div>
          <div className={classes.p}>
            <i className="material-icons-outlined">public</i>
            <p className={classes.margin}>{plant.climate}</p>
          </div>
        </div>

        <Link to="/matchlistoverview">
          <FilledButton text="Back" />
        </Link>
      </div>
    </main>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media (max-width: 550px)": {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  image: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F0E1D4",
    width: "20rem",
    height: "25rem",
    position: "relative",
  },
  span: {
    position: "absolute",
    transform: "scale(1.2)",
    bottom: "20px",
    left: "10px",
    animation: "$blink 1s ease-in-out infinite",
    fontSize: "0.75rem",
  },
  "@keyframes blink": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 0.8,
      transform: "scale(1.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "2rem",
    width: "35%",
    "@media (max-width: 550px)": {
      alignItems: "center",
      width: "50%",
      paddingLeft: "0rem",
    },
  },
  h3: {
    paddingTop: "0rem",
    fontWeight: "bold",
  },
  p: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
  },
  margin: {
    marginLeft: "0.5rem",
    wordBreak: "break-all",
  },
  right: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "0rem",
  },
  button: {
    height: "3rem",
    paddingLeft: "0",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default InfoCard;
