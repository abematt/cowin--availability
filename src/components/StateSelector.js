import StateList from "./StateList";

export default function StateSelector({ statelist, selectState }) {
  return (
    <div>
      <StateList selectState={selectState} statelist={statelist}></StateList>
    </div>
  );
}
