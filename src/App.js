import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Films from "./Pages/Films";
import Actors from "./Pages/Actors";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Actors" element={<Actors />} />
          <Route path="Films" element={<Films />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<><App /></>, document.getElementById("root"));