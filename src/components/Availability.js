import { Link } from "react-router-dom";
export default function Availability() {
  return (
    <div>
      <input type="date"></input>
      <Link to="/districts">
        <button>Back</button>
      </Link>
    </div>
  );
}
