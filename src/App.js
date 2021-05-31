import "./App.css";
import StateSelector from "./components/StateSelector";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DistrictSelector from "./components/DistrictSelector";
import Availability from "./components/Availability";

function App() {
  const [allStates, setStates] = useState();
  const [stateSelected, setStateSelection] = useState(false);
  const [stateId, setStateId] = useState(1);
  const [allDistricts, setDistricts] = useState();
  const [districtSelected, setDistrictSelection] = useState(false);
  const [districtId, setDistrictId] = useState(1);
  const [dateValue, setDate] = useState();
  const [appointmentDetails, setAppointmentDetails] = useState();

  //Function to get district list from local storage
  function getLocalStorageValues() {
    const allDistricts = localStorage.getItem("allDistricts");
    setDistricts(JSON.parse(allDistricts));
    const districtId = localStorage.getItem("districtId");
    setDistrictId(JSON.parse(districtId));
  }

  function setCurrentDate() {
    const currentDate = new Date();
    const date_formatted =
      currentDate.getDate() +
      "-" +
      currentDate.getMonth() +
      "-" +
      currentDate.getFullYear();
    setDate(date_formatted);
  }
  //Call API and fetch results on window load
  useEffect(() => {
    async function fetchData() {
      const data = await fetchStates(
        "https://cdn-api.co-vin.in/api/v2/admin/location/states"
      );
      setStates(data);
      // setCurrentDate();
      getLocalStorageValues();
    }
    fetchData();
  }, []);

  //API calling function
  const fetchStates = async (url) => {
    const result = await fetch(url);
    const resultData = await result.json();
    resultData.states.map((Element) => [(Element.selected = false)]);
    return resultData;
  };

  //Select State
  function selectState(state_id) {
    let stateCopy = [...allStates.states];
    stateCopy &&
      stateCopy.map((stateElement) => (stateElement.selected = false));
    stateCopy &&
      stateCopy.forEach((stateElement) => {
        if (stateElement.state_id === state_id) {
          stateElement.selected = true;
        }
      });

    stateCopy && setStates({ states: stateCopy, ttl: 24 });
    setStateSelection(true);
    setStateId(state_id);
    fetchDistricts(state_id);
  }

  function selectDistrict(district_id) {
    let districtCopy = [...allDistricts.districts];
    districtCopy &&
      districtCopy.map((districtElement) => (districtElement.selected = false));
    districtCopy &&
      districtCopy.forEach((districtElement) => {
        if (districtElement.district_id === district_id) {
          districtElement.selected = true;
        }
      });

    districtCopy && setDistricts({ districts: districtCopy, ttl: 24 });
    setDistrictSelection(true);
    setDistrictId(district_id);
    localStorage.setItem("districtId", JSON.stringify(district_id));
    setAppointmentDetails();
  }

  async function fetchDistricts(state_id) {
    const districtDataResult = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`
    );
    const districtData = await districtDataResult.json();
    districtData.districts.map((Element) => [(Element.selected = false)]);
    setDistricts(districtData);

    localStorage.setItem("allDistricts", JSON.stringify(districtData));
  }

  async function fetchAppointmentDetails(date) {
    const district_id = districtId;
    console.log("date in APP", date);
    const appointmentDetals = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
    );
    const appointmentData = await appointmentDetals.json();
    setAppointmentDetails(appointmentData);
    // localStorage.setItem("appointmentData", JSON.stringify(appointmentData));
  }

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          render={(props) => (
            <StateSelector
              selectState={selectState}
              statelist={allStates}
              stateSelection={stateSelected}
            ></StateSelector>
          )}
        />

        <Route
          path="/districts"
          render={(props) => (
            <DistrictSelector
              selectDistrict={selectDistrict}
              districtlist={allDistricts}
              districtSelection={districtSelected}
            ></DistrictSelector>
          )}
        />
        <Route
          path="/availability"
          render={(props) => (
            <Availability
              districtId={districtId}
              fetchAppointmentDetails={fetchAppointmentDetails}
              setDate={setDate}
              appointmentDetails={appointmentDetails}
            ></Availability>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
