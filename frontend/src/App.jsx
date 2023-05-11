import { Route, Routes } from "react-router-dom";
import "./App.css";
import Items from "./pages/Items";
import Home from "./pages/Users";
import CreateUser from "./pages/Users/CreateUser";
import CreateItem from "./pages/Items/CreateItem";
import EditItem from "./pages/Items/EditItem";
import EditUser from "./pages/Users/EditUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/createitem" element={<CreateItem />} />
        <Route path="/items/edit/:id" element={<EditItem />} />

        <Route path="/users" element={<Home />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
