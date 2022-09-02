import { useParams } from "react-router-dom";
import { getOnePeople } from "../data/people";

export function PeopleIndex () {
  return (
    <main style={{ padding: "1rem", border: "1px solid black" }}>
      <h2>Select a people name.</h2>
    </main>
  )
}