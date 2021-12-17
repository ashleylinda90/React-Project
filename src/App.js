import logo from "./logo.svg";
import "./App.css";
import Login from "./Data/Login";
import Signup from "./Data/Signup";
import Feed from "./Data/Feed";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
