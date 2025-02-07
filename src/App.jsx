import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Catalog from "./components/Catalog";
import Layouts from "./components/Layouts";
import PrepareSets from "./components/PrepareSets";

function App() {
  return (
    <div className="App">
      <Layouts>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/preparesets" element={<PrepareSets />} />
          </Routes>
        </main>
      </Layouts>
    </div>
  );
}

export default App;
