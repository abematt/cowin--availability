import DistrictList from "../components/DistrictList";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
import { FcLeft } from "react-icons/fc";

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
      <div className="NavigationBar">
        <Link to="/">
          <button className="btn">
            <FcLeft></FcLeft>{" "}
          </button>
        </Link>
        <Link to="/availability">
          <button className="btn" disabled={!districtSelection}>
            <FcRight></FcRight>
          </button>
        </Link>
      </div>
    </div>
  );
}
