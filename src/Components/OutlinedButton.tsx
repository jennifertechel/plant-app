import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";

function OutlinedButton() {
  const classes = useStyles();

  return (
    <>
      <button className={classes.button}>
        <NavLink to="quizpageone">Let'sBegin</NavLink>
      </button>
    </>
  );
}
const useStyles = createUseStyles({
  button: {
    padding: "0.8rem 1.2rem",
    borderRadius: 0,
    border: "1px solid black",
    fontSize: "1.2rem",
    background: "none",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    "&:hover": {
      background: "#F0E1D4",
      borderColor: "#F0E1D4",
    },
  },
});

export default OutlinedButton;
