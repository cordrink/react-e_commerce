import {Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";

function App() {
  return (
    <>
      <Navbar/>
      <FloatingCart />
      <Outlet />
    </>
  );
}

export default App;
