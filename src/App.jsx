import { useState } from "react";
import UntitledPage from "./pages/UntitledPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element=<UntitledPage /> />
      </Routes>
    </>
  );
}

export default App;
