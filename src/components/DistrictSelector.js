import DistrictList from "../components/DistrictList";

export default function DistrictSelector({ districtlist, selectDistrict }) {
  return (
    <div>
      <DistrictList
        selectDistrict={selectDistrict}
        districtList={districtlist}
      ></DistrictList>
    </div>
  );
}
