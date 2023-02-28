import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import FilledButton from "../Components/FilledButton";
import Input from "../Components/Input";
import { useQuiz } from "../Components/QuizContext";

function QuizPageOne() {
  const classes = useStyles();
  const { direction, setDirection } = useQuiz();

  return (
    <>
      <main className={classes.main}>
        <h2 className={classes.h2}>
          In which direction will your plants be placed?
        </h2>
        <p>Choose one or multiple options</p>
        <form className={classes.form}>
          <Input
            text="South"
            value={direction.south}
            onChecked={(south) => setDirection({ ...direction, south })}
          />
          <Input
            text="North"
            value={direction.north}
            onChecked={(north) => setDirection({ ...direction, north })}
          />
          <Input
            text="East"
            value={direction.east}
            onChecked={(east) => setDirection({ ...direction, east })}
          />
          <Input
            text="West"
            value={direction.west}
            onChecked={(west) => setDirection({ ...direction, west })}
          />
        </form>
        <div className={classes.buttonDiv}>
          <NavLink to="/" className={classes.buttonLink}>
            <FilledButton text="Exit" />
          </NavLink>

          <NavLink to="/quizpagetwo" className={classes.buttonLink}>
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
