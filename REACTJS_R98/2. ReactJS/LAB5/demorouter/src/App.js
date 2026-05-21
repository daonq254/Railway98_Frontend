import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import AccountManagement from './Components/AccountManagement';
import DepartmentManagement from './Components/DepartmentManagement';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Error from './Components/Error';

function App() {
  return (
    <div class="container">
      {/* Menu */}
      <div className="row">
        <nav className="navbar navbar-inverse" style={{ backgroundColor: "black", color: "black" }}>
          <div className="container-fluid">
            <ul class="nav navbar-nav">
              <li><Link to="/home">VTI ACADEMY</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/AccountManagement">AccountManagement</Link></li>
              <li><Link to="/DepartmentManagement">DepartmentManagement</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/Sign_Up"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Content */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/AccountManagement" element={<AccountManagement />} />
        <Route path="/DepartmentManagement" element={<DepartmentManagement />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign_Up" element={<SignUp />} />
        <Route path="*" element={<Error />} />

      </Routes>
      {/*  */}
    </div>
  );
}

export default App;
