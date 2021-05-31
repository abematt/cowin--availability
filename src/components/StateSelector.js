import StateList from "./StateList";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";

export default function StateSelector({
  stateSelection,
  statelist,
  selectState,
}) {
  return (
    <div className="card-container">
      <h1>Quickly check the vaccine available in your district</h1>

      <StateList selectState={selectState} statelist={statelist}></StateList>

      <Link to="/districts">
        <button className="btn" disabled={!stateSelection}>
          <FcRight></FcRight>
        </button>
      </Link>
    </div>
  );
}
