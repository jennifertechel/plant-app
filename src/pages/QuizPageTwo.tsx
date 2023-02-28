import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import FilledButton from "../Components/FilledButton";
import Input from "../Components/Input";

function QuizPageTwo() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2 className={classes.h2}>
          How much time would you like to spend on your plants?
        </h2>
        <p>Choose one option</p>
        <form className={classes.form}>
          <Input text="Minimum work please" />
          <Input text="I don't mind spending some time on it" />
          <Input text="Lots and lots" />
        </form>
        <div className={classes.buttonDiv}>
          <FilledButton>
            <NavLink to="/quizpageone" className={classes.buttonLink}>
              Previous
            </NavLink>
          </FilledButton>
          <FilledButton>
            <NavLink to="/matchlistoverview" className={classes.buttonLink}>
              Next
            </NavLink>
          </FilledButton>
        </div>
      </main>
    </>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
  },
  h2: {
    marginBottom: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  buttonDiv: {
    margin: "2rem 0",
  },
  buttonLink: {
    textDecoration: "none",
    color: "black",
  },
});

export default QuizPageTwo;
