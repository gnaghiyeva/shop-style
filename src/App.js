import { About } from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import "./App.css"
import Contact from "./Pages/Home/Components/Contact";
import Edit from "./Pages/Home/Components/Edit";
import Add from "./Pages/Home/Components/Add";
import SignIn from "./Components/SignIn";
import Welcome from "./Components/Welcome";
import { BasketContextProvider } from "./context/BasketContext";
function App() {
  return (
    <>
    <BasketContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/products/edit/:id' element={<Edit/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/welcome' element={<Welcome/>}></Route>

    </Routes>
    </BasketContextProvider>
    </>
  );
}

export default App;
