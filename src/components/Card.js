export default function State({
  type,
  value,
  name,
  stateElement,
  selectState,
}) {
  function typeChose() {
    if (type === "state") {
      return stateElement.state_id;
    } else {
      console.log("District ID", stateElement.district_id);
      return value;
    }
  }
  return (
    <h3
      onClick={() =>
        selectState(
          type === "state" ? stateElement.state_id : stateElement.district_id
        )
      }
      className={`Cards ${stateElement.selected ? "selected" : ""}`}
    >
      {name}
    </h3>
  );
}
