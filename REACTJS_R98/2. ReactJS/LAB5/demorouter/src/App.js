import './App.css';

function App() {
  return (
    <div class="container">
      <div className="row">
        <nav className="navbar navbar-inverse" style={{ backgroundColor: "black", color: "black" }}>
          <div className="container-fluid">
            <ul class="nav navbar-nav">
              <li><a href="#">VTI ACADEMY</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">AccountManagement</a></li>
              <li><a href="#">DepartmentManagement</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default App;
