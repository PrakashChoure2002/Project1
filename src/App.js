import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./compoments/Header";
import Home from "./compoments/Home";
import Footer from "./compoments/Footer";
import Contact from "./compoments/Contact";
import Services from "./compoments/Services";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquary.scss";


function App() {
  return (
    
      <Router>
        <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
      

      </Routes>
      <Footer/>

      </Router>
    
  );
}

export default App

