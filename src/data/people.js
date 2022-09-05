const peoples = [
  {
    id: 1,
    name: "Pedro",
    gender: "M",
    age: 21,
  },  
  
  {
    id: 2,
    name: "Maria",
    gender: "F",
    age: 43,
  },

  {
    id: 3,
    name: "Victor",
    gender: "M",
    age: 32,
  },

  {
    id: 4,
    name: "Felipe",
    gender: "M",
    age: 91,
  },

  {
    id: 5,
    name: "Amanda",
    gender: "F",
    age: 18,
  },

  {
    id: 6,
    name: "Mariana",
    gender: "F",
    age: 60,
  },
]

export function getAllPeoples() {
  return peoples
}

export function getOnePeople(id) {
  return peoples.find(
    (people) => people.id === id
  )
} 