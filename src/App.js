import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <AppHeader />;
      <AppHeader />;
      <AppBody />;
      <AppFooter />;
    </>
  );
}

function AppHeader() {
  return (
    <div className="row bg-success text-light p-3">
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">About Us</div>
    </div>
  );
}
function AppBody() {
  return (
    <>
      <div className="alert alert-success fs-3">lorem20 lorem20</div>
    </>
  );
}
function AppFooter() {
  return (
    <>
      <div className="bg-secondary text-light d-flex justify-content-center align-items-center">
        Footer
      </div>
    </>
  );
}
export default App;
