import React from "react";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
