import { NavLink } from "react-router-dom";



export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        background: "#2e2e2eff",
        position: "fixed",
        left: 0,
        top: 60,
        bottom: 0,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <NavLink to="/" className="sidebar-link">Home</NavLink>
      <NavLink to="/paints" className="sidebar-link">Paints</NavLink>
      <NavLink to="/schemes" className="sidebar-link">Schemes</NavLink>
      <NavLink to="/manufacturers" className="sidebar-link">Manufacturers</NavLink>
      <NavLink to="/settings" className="sidebar-link">Settings</NavLink>
    </aside>
  );
}

      // <Link to="/manufacturers" style={{ marginLeft: 16, color: "#e0ffe4ff", textDecoration: "none" }}>
      //   Manufacturers
      // </Link>
      // <Link to="/paints" style={{ marginLeft: 16, color: "#e0ffe4ff", textDecoration: "none" }}>
      //   Paints
      // </Link>
      // <Link to="/schemes" style={{ marginLeft: 16, color: "#e0ffe4ff", textDecoration: "none" }}>
      //   Schemes
      // </Link>