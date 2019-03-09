const columns = [
  {
    title: "Id",
    valueKey: "id"
  },
  {
    title: "Name",
    valueKey: "name"
  },
  {
    title: "Age",
    valueKey: "age",
    render: ({ rowValues }) => rowValues && rowValues.age
  },
  {
    title: "Nationality",
    valueKey: "nationality",
    render: ({ rowValues }) => rowValues && rowValues.nationality
  },
  {
    title: "Hair Color",
    valueKey: "hairColor",
    render: ({ rowValues }) => rowValues && rowValues.hairColor
  },
  {
    title: "Eye Color",
    valueKey: "eyeColor",
    render: ({ rowValues }) => rowValues && rowValues.eyeColor
  },
  {
    title: "Marital Status",
    valueKey: "maritalStatus",
    render: ({ rowValues }) => rowValues && rowValues.maritalStatus
  }
];

const dataSource = [
  {
    id: 1,
    name: "Ahmed",
    age: 25,
    nationality: "Egyption",
    hairColor: "black",
    eyeColor: "brown",
    maritalStatus: "single"
  },
  {
    id: 2,
    name: "Eman",
    age: 22,
    nationality: "Egyption",
    hairColor: "blue",
    eyeColor: "brown",
    maritalStatus: "married"
  },
  {
    id: 3,
    name: "Mostafa",
    age: 22,
    nationality: "Egyption",
    hairColor: "red",
    eyeColor: "green",
    maritalStatus: "single"
  },
  {
    id: 4,
    name: "Simon",
    age: 30,
    nationality: "amirican",
    hairColor: "black",
    eyeColor: "blue",
    maritalStatus: "single"
  },
  {
    id: "5",
    name: "Youmna",
    age: 25,
    nationality: "Egyption",
    hairColor: "black",
    eyeColor: "brown",
    maritalStatus: "married"
  }
];

export default {
  columns,
  dataSource
};
