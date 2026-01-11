import "./Navbar.css";
import logo from "../../assets/images/Logo.png";

export default function Navbar({ setActiveSection }) {
  return (
    <header className="navbar">
      {/* LEFT SIDE */}
      <div
        className="nav-left nav-link"
        onClick={() => setActiveSection("home")}
      >
        <img src={logo} alt="WALL·E Logo" className="nav-logo" />
        <span className="nav-title">WALL·E</span>
      </div>

      {/* RIGHT SIDE */}
      <nav className="nav-right">
        <button
          className="nav-link"
          onClick={() => setActiveSection("why")}
        >
          Why
        </button>

        <button
          className="nav-link"
          onClick={() => setActiveSection("how")}
        >
          How
        </button>

        <button
          className="nav-link"
          onClick={() => setActiveSection("features")}
        >
          Features
        </button>

        {/* Login – inactive for now */}
        <button className="nav-link login-btn" disabled>
          Login
        </button>
      </nav>
    </header>
  );
}
