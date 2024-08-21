import logo from "./logo.svg";
import "./App.css";
import Create from "./Components/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
