import { createUseStyles } from "react-jss";

function Card() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.card}>
        <img src="" alt="" className={classes.card_img} />
      </div>
      <p className={classes.card_name}>name of plant</p>
    </>
  );
}

const useStyles = createUseStyles({
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
