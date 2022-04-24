const uuid = require("uuid")
const userData = new Array()

function add(data) {
  if (
    userData.find((user) => {
      console.log(user)
      return user.name === data.name
    })
  ) {
    console.log("already exits")
    return
  }
  const id = uuid.v4()
  userData.push({ ...data, id })
  return id
}
add({
  id: uuid.v4(),
  name: "bob",
  pass: "bob",
})

function find(id) {
  return userData.find((user) => user.id === id)
}
function findByName(name) {
  return userData.find((user) => user.name === name)
}
console.log(find("vishnu"))
console.log(userData)
module.exports = {
  add,
  find,
  userData,
  findByName,
}
