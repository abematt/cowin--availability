import { Link } from "react-router-dom";

export default function Footer({ stateSelection }) {
  return (
    <footer>
      <Link to="/districts">
        <button disabled={!stateSelection}>Next</button>
      </Link>
    </footer>
  );
}
