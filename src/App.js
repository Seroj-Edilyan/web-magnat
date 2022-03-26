import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./navigation/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cours from "./pages/Cours";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import Registr from "./pages/Registr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="about" element={<About/>}/>
         <Route exact path="cours" element={<Cours/>}/>
         <Route exact path="contact" element={<Contact/>}/>
         <Route exact path="registr" element={<Registr/>}/>
         <Route exact path="*" element={<Error/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
