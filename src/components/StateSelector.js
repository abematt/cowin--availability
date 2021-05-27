import StateList from "./StateList";
import { Link } from "react-router-dom";

export default function StateSelector({
  stateSelection,
  statelist,
  selectState,
}) {
  return (
    <div>
      <StateList selectState={selectState} statelist={statelist}></StateList>

      <Link to="/districts">
        <button disabled={!stateSelection}>Next</button>
      </Link>
    </div>
  );
}
