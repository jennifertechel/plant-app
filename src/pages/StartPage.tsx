import { createUseStyles } from "react-jss";
import Header from "../Components/Header";
import OutlinedButton from "../Components/OutlinedButton";

function StartPage() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <p className={classes.p}>
          Do our test to find the right plants for your home
        </p>
        <OutlinedButton />
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
    marginTop: "10rem",
  },
  p: {
    fontSize: "1.8rem",
    width: "40%",
    textAlign: "center",
    marginBottom: "3rem",
  },
});

export default StartPage;
