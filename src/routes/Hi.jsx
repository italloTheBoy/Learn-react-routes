import { Link } from "react-router-dom";

export function Hi () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Hi!</h1>

      <Link to="/">Home</Link>
    </main>
  )
}