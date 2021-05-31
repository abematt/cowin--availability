import { FcCancel } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

export default function ListAppointments({ appointmentDetails }) {
  return (
    <div className="appointmentContainer">
      <table className="rwd-table">
        <thead>
          <tr className="tableHead">
            <th>Name</th>
            <th>Fee Type</th>
            <th>Vaccine</th>
            <th>Slots Available</th>
          </tr>
        </thead>
        <tbody>
          {appointmentDetails &&
            appointmentDetails.sessions.map((appointElement, index) => (
              <tr key={index} className="table-row">
                <td className="hospitalName">{appointElement.name}</td>
                <td>{appointElement.fee_type} </td>
                <td className={`${appointElement.vaccine}`}>
                  {appointElement.vaccine}
                </td>
                <td>
                  {appointElement.available_capacity ? (
                    ""
                  ) : (
                    <FcCancel></FcCancel>
                  )}
                  {appointElement.available_capacity
                    ? appointElement.available_capacity
                    : ""}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
