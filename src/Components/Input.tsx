import { createUseStyles } from "react-jss";

interface Props {
  text: String;
}

function Input(props: Props) {
  const classes = useStyles();

  return (
    <>
      <label className={classes.label}>
        <input type="checkbox" id="option-1" />
        {props.text}
      </label>
    </>
  );
}

const useStyles = createUseStyles({
  label: {
    padding: "1rem",
    border: "1px solid black",
    margin: "0.6rem 0",
    fontFamily: "montserrat",
  },
});

export default Input;
