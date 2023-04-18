import SplitScreen from "./SplitScreen";

function App() {
  const LeftHandComponent = ({ name }) => {
    return <h1 style={{ background: "red " }}>{name}</h1>;
  };

  const RightHandComponent = ({ message }) => {
    return <h1 style={{ background: "green" }}>{message}</h1>;
  };

  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name='John'/>
      <RightHandComponent message='WELCOME'/>
    </SplitScreen>
  );
}

export default App;
