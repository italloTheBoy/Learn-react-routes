import { Link, Outlet } from "react-router-dom";
import { getAllPeoples } from "../data/people";

export function PeopleList () {
  const peoples = getAllPeoples()

  const peopleList = peoples.map(people => (
    <li key={people.id}>
      <Link to={`/peoples/${people.id}`}>{people.name}</Link>
    </li>
  ))

  return (
    <main style={{ padding: "1rem 0" }}>
      <Outlet />

      <ul style={{ listStyle: "none", padding: "0"}}>
        {peopleList}
      </ul>

      <hr />

      <Link to="/">Home</Link>
    </main>
  )
}