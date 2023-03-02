import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Plant } from "../hooks/usePlantMatch";

interface Props {
  plant: Plant;
}

function Card({ plant }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link
        to={"/plantinfo/" + plant.id}
        key={plant.id}
        className={classes.card}
      >
        <img
          src="/src/assets/images/10.svg"
          alt="Picture here"
          className={classes.cardImg}
        />
        <p className={classes.card_name}>
          {plant.common.length > 1 ? plant.common[1] : plant.common[0]}
        </p>
      </Link>
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
    textDecoration: "none",
    color: "Black",
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
