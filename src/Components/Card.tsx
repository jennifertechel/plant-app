import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { usePlantMatch } from "../hooks/usePlantMatch";

function Card() {
  const classes = useStyles();
  const plants = usePlantMatch();
  const images = [
    "/src/assets/images/10.svg",
    "/src/assets/images/12.svg",
    "/src/assets/images/11.svg",
  ];

  return (
    <div className={classes.container}>
      {plants.map(
        (plant, index) =>
          plant && ( // Add a conditional check for plant here
            <NavLink to="/plantinfo" key={plant.id}>
              <div className={classes.card}>
                <img
                  src={images[index % images.length]}
                  alt="Picture here"
                  className={classes.cardImg}
                />
                <p className={classes.card_name}>
                  {plant.common.length > 1 ? plant.common[1] : plant.common[0]}
                </p>
              </div>
            </NavLink>
          )
      )}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "18rem",
    height: "13rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "1.5rem",

    backgroundColor: "#F0E1D4",
  },
  cardImg: {
    paddingTop: "4rem",
    height: "13.5rem",
  },
  card_name: {
    alignItems: "flex-start",
    margin: "0rem",
    paddingLeft: "0.5rem",
    paddingRight: "1rem",
    paddingBottom: "3rem",
  },
});

export default Card;
