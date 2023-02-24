import { createUseStyles } from "react-jss";

function QuizPageOne() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <h2>This is Quiz Page One</h2>
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
