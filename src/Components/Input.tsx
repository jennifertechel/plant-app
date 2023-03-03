import { createUseStyles } from "react-jss";

interface Props {
  text: String;
  value: boolean;
  onChecked: (value: boolean) => void;
}

function Input(props: Props) {
  const classes = useStyles();

  return (
    <label className={classes.label}>
      <input
        type="checkbox"
        id={props.text.toString()}
        checked={props.value}
        onChange={(e) => props.onChecked(e.target.checked)}
      />
      {props.text}
    </label>
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
