export default function Home() {
  return (
    <main style={{ background: "#1a1a2e", color: "#e6e6e6", minHeight: "100vh", padding: "2rem" }}>
      <h1>GC Test App</h1>
      <p>Dark mode activated!</p>
      <button style={{ padding: "10px 20px", borderRadius: "8px", background: "#16213e", color: "#fff", border: "1px solid #0f3460" }}>
        Toggle Theme
      </button>
    </main>
  );
}
