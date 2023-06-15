import { useState } from "react";

// function App() {
//   return (
//     <>
//       <h1>Props Demo</h1>

//       {/* Calling MessageDemo */}
//       <MessageDemo />
//       <MessageDemo />
//       <MessageDemo />
//     </>
//   );
// }

// //Reusable but returns static output
// function MessageDemo() {
//   return (
//     <>
//       <h1>Hello Message</h1>
//     </>
//   );
// }

// How to make it dynamic
// make a function which accepts parameter
// function App() {
//   return (
//     <>
//       <h1>Props Demo</h1>

//       {/* Calling MessageDemo(props) */}
//       <MessageDemo message="Hi" username="vaibhav" />
//       <MessageDemo message="Hello" username="v" />
//       <MessageDemo username="vv" />
//     </>
//   );
// }
// function MessageDemo(props) {
//   console.log("I am inside messagedemo", props);
//   return (
//     <>
//       <h1>Hello {props.username}</h1>
//     </>
//   );
// }

// props destructured
function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/* Calling MessageDemo(props) */}
      <MessageDemo username="A" email="a@gmail.com" />
      <MessageDemo username="B" email="b@gmail.com" />
      <MessageDemo username="C" email="c@gmail.com" />
    </>
  );
}
function MessageDemo({ email, username }) {
  //console.log("I am inside messagedemo", props);
  return (
    <>
      <h1>
        Hello {username}:{email}
      </h1>
    </>
  );
}
export default App;
