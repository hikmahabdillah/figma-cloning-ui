import { useState } from "react";
import UntitledPage from "./pages/UntitledPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/design" element=<UntitledPage /> />
        <Route path="/" element=<HomePage /> />
      </Routes>
    </>
  );
}

export default App;
