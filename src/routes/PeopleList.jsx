import { useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getAllPeoples } from "../data/people";
import "./PeopleList.css"

export function PeopleList () {
  const peoples = getAllPeoples()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchName, setSearchName] = useState(searchParams.get("name") || "")

  const handleSearchName = e => {
    setSearchName(e.target.value)
  }

  const peopleList = peoples
    .filter(people => searchName.trim().length === 0
      ? true
      : people.name.toLocaleLowerCase().startsWith(searchName)
    )
    .map(people => (
      <NavLink 
        to={`/peoples/${people.id}`} 
        key={people.id}
        className={({ isActive }) => `peopleNav ${isActive && "activePeopleNav"}`}
      >
        {people.name}
      </NavLink>
    ))

  return (
    <main style={{ padding: "1rem 0" }}>
      <Outlet />

      <input 
        type="text" 
        onChange={handleSearchName} 
        value={searchName} 
        style={{ margin: "1.5em auto 1em auto"}}
      />

      <nav style={{ listStyle: "none", padding: "0"}}>
        {peopleList}
      </nav>

      <hr />

      <Link to="/">Home</Link>
    </main>
  )
}