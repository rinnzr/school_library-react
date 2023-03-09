import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import Book from "./pages/Book";
import Borrow from "./pages/Borrow";
import History from "./pages/History";
import Navigation from "./Components/Navigation";
import './App.css';


function App(){
  const location = useLocation();
  console.log(location.pathname)

  return(
    <div className="App bg-sky-200">
      {location.pathname !== '/login' && location.pathname !== '*' && <Navigation />}
     
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="member" element={ <Member/>} />
        <Route path="book" element={ <Book/>} />
        <Route path="borrow" element={ <Borrow/>} />
        <Route path="history" element={ <History/>} />

      </Routes>
    </div>
  )
}

export default App