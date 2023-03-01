import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundary";
import FilledButton from "../Components/FilledButton";
import Input from "../Components/Input";
import { useQuiz } from "../Components/QuizContext";

function QuizPageTwo() {
  const classes = useStyles();
  const { watering, setWatering } = useQuiz();

  return (
    <>
      <main className={classes.main}>
        <h2 className={classes.h2}>
          How much time would you like to spend on your plants?
        </h2>
        <p>Choose one option</p>
        <ErrorBoundary>
          <form className={classes.form}>
            <Input
              text="Minimum work please"
              value={watering.easy}
              onChecked={(easy) => setWatering({ ...watering, easy })}
            />
            <Input
              text="I don't mind spending some time on it"
              value={watering.medium}
              onChecked={(medium) => setWatering({ ...watering, medium })}
            />
            <Input
              text="I've got nothing but time"
              value={watering.hard}
              onChecked={(hard) => setWatering({ ...watering, hard })}
            />
          </form>
        </ErrorBoundary>
        <div className={classes.buttonDiv}>
          <NavLink to="/quizpageone" className={classes.buttonLink}>
            <FilledButton text="Exit" />
          </NavLink>

          <NavLink to="/matchlistoverview" className={classes.buttonLink}>
            <FilledButton text="Next" />
          </NavLink>
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
