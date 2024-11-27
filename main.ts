interface Person {
  id: number | string;
  name: string;
  age: number;
}

const persons: Person[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const person = persons.find((person) => person.id === 2);

console.log(person);
