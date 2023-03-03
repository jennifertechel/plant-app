import { createUseStyles } from "react-jss";

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>PlantMatch</h1>
      <div className={classes.border}></div>
    </header>
  );
}

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    margin: "2rem 0 0.5rem",
    fontWeight: "normal",
    fontSize: "2.5rem",
  },
  border: {
    borderBottom: "1px solid black",
    width: "20%",
  },
});

export default Header;
