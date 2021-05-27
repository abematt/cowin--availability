export default function ListAppointments({ appointmentDetails }) {
  return (
    <div>
      <table className="rwd-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fee Type</th>
            <th>Vaccine</th>
            <th>Slots</th>
          </tr>
        </thead>
        <tbody>
          {appointmentDetails &&
            appointmentDetails.sessions.map((appointElement) => (
              <tr key={appointElement.center_id}>
                <td>{appointElement.name}</td>
                <td>{appointElement.fee_type}</td>
                <td>{appointElement.vaccine}</td>
                <td>{appointElement.available_capacity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
