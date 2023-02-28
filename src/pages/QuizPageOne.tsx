import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import FilledButton from "../Components/FilledButton";
import Input from "../Components/Input";

function QuizPageOne() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2 className={classes.h2}>
          In which direction will your plants be placed?
        </h2>
        <p>Choose one or multiple options</p>
        <form className={classes.form}>
          <Input text="South" />
          <Input text="North" />
          <Input text="West" />
          <Input text="East" />
        </form>
        <div className={classes.buttonDiv}>
          <FilledButton>
            <NavLink to="/" className={classes.buttonLink}>
              Exit
            </NavLink>
          </FilledButton>
          <FilledButton>
            <NavLink to="/quizpagetwo" className={classes.buttonLink}>
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
    width: "25%",
  },
  buttonDiv: {
    margin: "2rem 0",
  },
  buttonLink: {
    textDecoration: "none",
    color: "black",
  },
});

export default QuizPageOne;
