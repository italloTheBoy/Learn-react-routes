import { useParams } from "react-router-dom";
import { getOnePeople } from "../data/people";

export function PeopleInfo () {
  function getPleopleGender(genderTag) {
    if (genderTag === "M") {
      return "men"
    }

    if (genderTag === "F") {
      return "woman"
    }

    return "people"
  }

  const { peopleId } = useParams()

  const people = getOnePeople(Number(peopleId))

  return (
    <main style={{ padding: "1rem", border: "1px solid black" }}>
      <h2>{people.name} is a {people.age} years old {getPleopleGender(people.gender)}.</h2>
    </main>
  )
}