import { createUseStyles } from "react-jss";

interface Props {
  children: React.ReactNode;
}

function OutlinedButton(props: Props) {
  const classes = useStyles();

  return <button className={classes.button}>{props.children}</button>;
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
