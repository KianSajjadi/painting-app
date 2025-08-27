export default function Navbar() {
  return (
    <header
      style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        background: "#030514ff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <strong style={{ fontSize: 20, position: "sticky" }}>Paintman</strong>
    </header>
  );
}