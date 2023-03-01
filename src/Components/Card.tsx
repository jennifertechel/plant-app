import { createUseStyles } from "react-jss";
import { usePlantMatch } from "../hooks/usePlantMatch";

function Card() {
  const classes = useStyles();
  const plants = usePlantMatch();

  return (
    <div className={classes.container}>
      {plants.map((plant) => (
        <div key={plant.id} className={classes.card}>
          <img
            src="/src/assets/images/10.svg"
            alt="Picture here"
            className={classes.card_img}
          />
          <p className={classes.card_name}>
            {plant.common.length > 1 ? plant.common[1] : plant.common[0]}
          </p>
        </div>
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    width: "18rem",
    height: "13rem",
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
    marginBottom: "0",
    backgroundColor: "#F0E1D4",
  },
  card_img: {
    display: "flex",
    justifyContent: "center",
  },
  card_name: {
    alignItems: "flex-start",
    marginTop: "0rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
  },
});

export default Card;
