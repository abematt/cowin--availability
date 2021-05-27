import { Link } from "react-router-dom";
import ListAppointments from "./ListAppointments";

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
    <div className="appointmentContainer">
      <input
        className="dateinput"
        type="date"
        onInput={(inputDate) => sanitizeDate(inputDate)}
      ></input>
      <Link to="/districts">
        <button className="btn">Back</button>
      </Link>
      <ListAppointments
        appointmentDetails={appointmentDetails}
      ></ListAppointments>
    </div>
  );
}
