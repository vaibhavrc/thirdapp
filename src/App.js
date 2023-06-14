import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />;
      <AppBody />;
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
  return <h1>AppFooter</h1>;
}
export default App;
