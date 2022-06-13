import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import { ChartContainer } from "./components/chartContainer/ChartContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/expences-chart"} element={<ChartContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
