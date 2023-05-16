import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Create from './Component/Student/Create'
import Update from './Component/Student/Update'
import view from './Component/Student/view'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/create" Component={Create }  />
          <Route path="/update/:id" Component={Update}  />
          <Route path="/view/:id" Component={view} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
