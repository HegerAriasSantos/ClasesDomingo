const db = [1, 2, 3, 4];


const getAllTask = () => {
  return db
};
const deleteTask = (index) => {
  db.splice(index, 1);
};
const updateTask = (obj) => {
  // let obj = {
  //   index: 0,
  //   body: "hola"
  // }
  const { index, body } = obj
  db[index] = body;
};
const createTask = (item) => {
  db.push(item)
};



module.exports = {
  getAllTask,
  deleteTask,
  updateTask,
  createTask
}
