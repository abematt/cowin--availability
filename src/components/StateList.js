import Card from "./Card";

export default function StateList({ statelist, selectState }) {
  function listStateOptions(statelist) {
    return statelist.states.map((stateElement) => (
      <Card
        className="stateCard"
        key={stateElement.state_id}
        value={stateElement.state_id}
        name={stateElement.state_name}
        type="state"
        stateElement={stateElement}
        selectState={selectState}
      />
    ));
  }
  return (
    <div className="stateCards">{statelist && listStateOptions(statelist)}</div>
  );
}
