function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

function CounterApp() {
  // data member
  let counter = 1;
  let str = "Like Me!";
  let id = 100;
  let PI = 3.142;
  let active = true;

  //member function
  let likeMeAction = () => {};
  let dislikeMeAction = () => {};

  // JSX::VIEW::USER-INTERFACE :: Required
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value={str} />
    </>
  );
}
export default App;
