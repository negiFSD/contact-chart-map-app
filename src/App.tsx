import "./App.css";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Contact from "./pages/Contact";
import Maps from "./pages/Maps";
import Welcome from "./pages/Welcome";
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Welcome/>}/>
        <Route path="charts" element={<Charts/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="maps" element={<Maps/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
