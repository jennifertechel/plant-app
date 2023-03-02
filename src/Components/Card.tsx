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
        className={classes.cardImg}
      />
      <p className={classes.cardName}>{plant.latin}</p>
    </Link>
  );
}

const useStyles = createUseStyles({
  card: {
    width: "18rem",
    height: "13rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "1.5rem",
    backgroundColor: "#F0E1D4",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 1,
    },
    "&:hover ~ *": {
      opacity: 0.5,
    },
  },
  cardImg: {
    paddingTop: "4rem",
    height: "13.5rem",
  },
  cardName: {
    alignItems: "flex-start",
    margin: "0rem",
    paddingLeft: "0.5rem",
    paddingRight: "1rem",
    paddingBottom: "3rem",
    color: "black",
  },
});

export default Card;
