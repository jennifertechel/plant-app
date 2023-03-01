import { createUseStyles } from "react-jss";
import { usePlantMatch } from "../hooks/usePlantMatch";

function Card() {
  const classes = useStyles();
  const plants = usePlantMatch();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          src="/src/assets/images/10.svg"
          alt="Picture here"
          className={classes.cardImg}
        />
      </div>
      <p className={classes.card_name}>{plants[1]?.family}</p>
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
  cardImg: {
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
