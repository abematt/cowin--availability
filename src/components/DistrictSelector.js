import DistrictList from "../components/DistrictList";
import { Link } from "react-router-dom";

export default function DistrictSelector({
  districtSelection,
  districtlist,
  selectDistrict,
}) {
  return (
    <div className="card-container">
      <DistrictList
        selectDistrict={selectDistrict}
        districtlist={districtlist}
      ></DistrictList>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <Link to="/availability">
        <button className="btn" disabled={!districtSelection}>
          Next
        </button>
      </Link>
    </div>
  );
}
