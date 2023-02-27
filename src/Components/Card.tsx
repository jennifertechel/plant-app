import { createUseStyles } from "react-jss";

function Card() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.card}>
        <img src="" alt="" className={classes.card_img} />
        <p className={classes.card_name}>name of plant</p>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  card: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
    backgroundColor: "#F0E1D4",
  },
  card_img: {
    display: "flex",
    justifyContent: "center",
  },
  card_name: {
    alignItems: "flex-start",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

export default Card;
