import Home from "./routes/Home/Home";
import { Outlet, Route, Routes } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Naviagtion</h1>
      </div>
      <Outlet />
    </div>
  )
}
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
