import Card from "./Card";

export default function DistrictList({ districtlist, selectDistrict }) {
  {
    function listDistrictOptions(districtlist) {
      return districtlist.districts.map((districtElement) => (
        <Card
          className="stateCard"
          key={districtElement.district_id}
          value={districtElement.district_id}
          name={districtElement.district_name}
          type="district"
          stateElement={districtElement}
          selectState={selectDistrict}
        />
      ));
    }
    return (
      <div className="stateCards">
        {districtlist && listDistrictOptions(districtlist)}
      </div>
    );
  }
}
