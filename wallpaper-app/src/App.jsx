import { useState } from "react";
import Main from "./Pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
