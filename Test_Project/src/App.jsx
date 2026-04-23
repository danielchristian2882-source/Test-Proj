import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from './LoginForm.jsx';

function MyHeader() {
  const navigate = useNavigate();
  return (
    <header>
      <h1>My Header</h1>
      <button className="B1" onClick={() => navigate("/login")}>
        Login
      </button>
    </header>
  );
}

function Body() {
  return (
    <main>
      <p>My Body</p>
      <button className="B1">Reset</button>
      <button className="B2">Build</button>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>My Footer</p>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="App">
      <MyHeader />
      <Body />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
