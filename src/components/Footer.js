import { Link } from "react-router-dom";

export default function Footer({ stateSelection }) {
  const selectedStatus = stateSelection;

  return (
    <footer>
      <Link to="/districts">
        <button disabled={selectedStatus}>Next</button>
      </Link>
    </footer>
  );
}
