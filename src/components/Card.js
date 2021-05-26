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
      return stateElement.district_id;
    }
  }
  return (
    <h3
      onClick={() => selectState(typeChose())}
      className={`Cards ${stateElement.selected ? "selected" : ""}`}
    >
      {name}
    </h3>
  );
}
