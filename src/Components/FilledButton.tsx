import { createUseStyles } from "react-jss";

interface Props {
  text: String;
}

function FilledButton(props: Props) {
  const classes = useStyles();

  return <button className={classes.button}>{props.text}</button>;
}
const useStyles = createUseStyles({
  button: {
    padding: "0.65rem 1rem",
    borderRadius: 0,
    border: "none",
    fontSize: "1rem",
    background: "#BCC7B5",
    fontFamily: "Montserrat",
    width: "140px",
    margin: "0 2rem",
    "&:hover": {
      background: "#7D8975",
    },
  },
});

export default FilledButton;
