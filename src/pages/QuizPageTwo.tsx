import { createUseStyles } from "react-jss";
import Header from "../Components/Header";

function QuizPageTwo() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}></main>
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

export default QuizPageTwo;
