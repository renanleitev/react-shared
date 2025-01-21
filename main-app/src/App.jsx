import { useState } from "react";
import "./App.css";

import { Button } from "../../shared-library/src/components/Button/Button";
import { NavBar } from "../../shared-library/src/components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Aplicação Principal</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* Componentes de shared library */}
      <h3>Aplicação Secundária</h3>
      <NavBar />
      <Button />
    </>
  );
}

export default App;
