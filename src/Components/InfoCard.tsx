import { createUseStyles } from "react-jss";

function Card() {
  const classes = useStyles();

  return (
    <>
      <main className={classes.main}>
        <div className={classes.image}></div>
        <div className={classes.info}>
          <h3 className={classes.h3}>Namn</h3>
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>
        </div>
      </main>
    </>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "lightgreen",
    width: "10rem",
    height: "20rem",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
    //alignItems: "center",
    paddingLeft: "1rem",
  },
  h3: {
    paddingTop: "0rem",
  },
});

export default Card;
