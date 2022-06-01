import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ChartContainer } from "./components/chartContainer/ChartContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/chart"} element={<ChartContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
