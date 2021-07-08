const dataUser = [
  {
    name: "Alice",
    age: 20,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Jane",
    age: 20,
  },
];

const countAverage = () => {
  const totalAge = dataUser.reduce((init, current) => init + current.age, 0);
  return (average = totalAge / dataUser.length);
};

dataUser.map((user) => {
  document.getElementById("table-body").insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td style='border: 1px solid black;'>${user.name}</td>
      <td style='border: 1px solid black;'>${user.age}</td>
    </tr>`
  );
});
