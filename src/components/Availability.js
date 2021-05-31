import { Link } from "react-router-dom";
import ListAppointments from "./ListAppointments";
import { BiArrowBack } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";

export default function Availability({
  districtId,
  fetchAppointmentDetails,
  setDate,
  appointmentDetails,
}) {
  function sanitizeDate(inputDate) {
    const date_list = inputDate.target.value.split("-");

    const date_formatted =
      date_list[2] + "-" + date_list[1] + "-" + date_list[0];
    console.log("date chosen", date_formatted);
    setDate(date_formatted);
    fetchAppointmentDetails(date_formatted);
  }

  return (
    <div className="mainAppointmentContainer">
      <div className="dateinput">
        <input
          type="date"
          onInput={(inputDate) => sanitizeDate(inputDate)}
          align="right"
        ></input>
        <Link to="/districts">
          <button className="btn">
            <BiArrowBack style={{ color: "red" }}></BiArrowBack>
          </button>
        </Link>
      </div>
      <div class="gap"></div>
      <ListAppointments
        appointmentDetails={appointmentDetails}
      ></ListAppointments>
    </div>
  );
}
