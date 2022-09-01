import { Link } from "react-router-dom";

export function Hello () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Hello!</h1>

      <Link to="/">Home</Link>
    </main>
  )
}