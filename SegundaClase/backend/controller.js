const model = require('./model')
const { bodyParser } = require('./lib/bodyParser')

const getAllTask = (req, res) => {
  res.writeHead(200, "OK", {
    "Content-Type": "application/json"
  })
  res.write(JSON.stringify(model.getAllTask()));
  res.end();
};

const deleteTask = async (req, res) => {
  res.writeHead(204, "Not Content", {
    "Content-Type": "application/json"
  })
  await bodyParser(req).then(() => {
    model.deleteTask(req.body.index)
    res.write("DELETED");
    res.end();
  })
};
const updateTask = async (req, res) => {
  res.writeHead(200, "Updated", {
    "Content-Type": "application/json"
  })
  await bodyParser(req).then(() => {
    model.updateTask(req.body)
    res.write("UPDATED");
    res.end();
  })
};
const createTask = async (req, res) => {
  res.writeHead(201, "Created", {
    "Content-Type": "application/json"
  })
  await bodyParser(req).then(() => {
    model.createTask(req.body.body)
    res.write("CREATED");
    res.end();
  })
};
const NotFound = (req, res) => {
  res.writeHead(404, "Not Found", {
    "Content-Type": "application/json"
  })
  res.write(JSON.stringify("The method is not allowed"));
  res.end();
}



module.exports = {
  getAllTask,
  deleteTask,
  updateTask,
  createTask,
  NotFound
}
