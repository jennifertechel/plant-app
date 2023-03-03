import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import OutlinedButton from "../Components/OutlinedButton";

function StartPage() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <p className={classes.p}>
        Do our test to find the right plants for your home
      </p>
      <NavLink to="quizpageone" className={classes.buttonLink}>
        <OutlinedButton text="Let's begin" />
      </NavLink>
    </main>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10rem",
  },
  p: {
    fontSize: "1.8rem",
    width: "40%",
    textAlign: "center",
    marginBottom: "3rem",
  },
  buttonLink: {
    textDecoration: "none",
    color: "black",
  },
});

export default StartPage;
