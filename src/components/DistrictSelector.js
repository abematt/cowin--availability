import DistrictList from "../components/DistrictList";
import { Link } from "react-router-dom";

export default function DistrictSelector({
  districtSelection,
  districtlist,
  selectDistrict,
}) {
  return (
    <div>
      <DistrictList
        selectDistrict={selectDistrict}
        districtlist={districtlist}
      ></DistrictList>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Link to="/availability">
        <button disabled={!districtSelection}>Next</button>
      </Link>
    </div>
  );
}
