import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

//Stateless
// function CounterApp() {
//   // DataMember Stateless
//   let counter = 100;
//   let str = "Like Me";
//   let likeMeAction = () => {
//     // alert();
//     counter = counter + 1;
//     console.log("I am button click");
//   };
//   return (
//     <>
//       <h1>{counter}</h1>
//       <input type="button" value={str} onClick={likeMeAction} />
//     </>
//   );
// }

// Stateful
function CounterApp() {
  // DataMember Stateful:: variable+method useful to perform DOM operation
  let [counter, setCounter] = useState(100);
  let str = "Like Me";
  let likeMeAction = () => {
    // alert();
    counter = counter + 1;
    console.log("I am button click", counter);

    // Asking React to perform DOM Operation
    setCounter(counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value={str} onClick={likeMeAction} />
    </>
  );
}
export default App;
