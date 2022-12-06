let data = fetch('http://localhost:3000/api/v1/tasks')
  .then((res) => res.json())
  .then((res) => console.log(res));
