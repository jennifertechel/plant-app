import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Plant } from "../hooks/usePlantMatch";

interface Props {
  plant: Plant;
  index: number;
}

function Card({ plant, index }: Props) {
  const classes = useStyles();
  const imagesURL = [
    "/public/11.svg",
    "/public/12.svg12.svg",
    "/public/10.svg",
  ];
  const imagesIndex = index % imagesURL.length;
  const image = imagesURL[imagesIndex];

  return (
    <div className={classes.container}>
      <Link
        to={"/plantinfo/" + plant.id}
        key={plant.id}
        className={classes.card}
      >
        <img src={image} alt="Picture here" className={classes.cardImg} />
        <p className={classes.cardName}>{plant.common[0]}</p>
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
    margin: "1.5rem",
    textDecoration: "none",
    backgroundColor: "#F0E1D4",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 1,
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
