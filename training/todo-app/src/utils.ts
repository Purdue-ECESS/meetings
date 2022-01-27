export const fetchTasks = () => {
  return new Promise(resolve => {
    fetch(
      "http://localhost:8080/todo",
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then(res => res.json())
    .then(res => resolve(res));
  })
};

export const updateTask = ({action, name, id}: any) => {
  return new Promise(resolve => {
    fetch(
      "http://localhost:8080/todo",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({action, id, data: {name}})
      }
    ).then(res => resolve(null));
  });
}