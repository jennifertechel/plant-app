import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Plant } from "../hooks/usePlantMatch";

interface Props {
  plant: Plant;
}

function Card({ plant }: Props) {
  const classes = useStyles();

  return (
    <Link to={"/plantinfo/" + plant.id} key={plant.id} className={classes.card}>
      <img
        src="/src/assets/images/10.svg"
        alt="Picture here"
        className={classes.card_img}
      />
      <p className={classes.card_name}>
        {plant.common.length > 1 ? plant.common[1] : plant.common[0]}
      </p>
    </Link>
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
