import * as uuid from "uuid"
const userData = new Array()

function add(data: any) {
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
  name: "vishnu@gmail.com",
  pass: "1234",
})

function find(id: any) {
  return userData.find((user) => user.id === id)
}
function findByName(name: String) {
  return userData.find((user) => user.name === name)
}
console.log(find("vishnu"))
console.log(userData)
export default { add, find, userData, findByName }
