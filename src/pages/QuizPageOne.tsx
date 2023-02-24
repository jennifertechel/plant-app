import { createUseStyles } from "react-jss";
import Header from "../Components/Header";

function QuizPageOne() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <h2>This is quizpageone</h2>
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
  },
});

export default QuizPageOne;
