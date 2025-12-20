
import { Routes, Route, useLocation } from "react-router-dom";

import Entry from "./pages/Login";
import Wish from "./pages/Wish";
import Surprise from "./pages/Surprise";
import AuroraBackground from "./components/AuroraBackground";
import Stars from "./components/Stars";


export default function App() {
  return (
    <>
      <Stars />

      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </>
  );
}
