const numbers = [
  {
    id: 0,
    number: 1
  }
]

let id = 1

module.exports = {
  getNumbers: (req, res) => {
    res.status(200).send(numbers)
  },
  createNumber: (req, res) => {
    const {number} = req.body
    numbers.push({
      id,
      number
    })
    id++;
    res.status(200).send(numbers)
  },
  updateNumber: (req, res) => {
    const {id} = req.params
    const {number} = req.body

    let index = numbers.findIndex(number => number.id == id)

    let foundNumber = numbers[index]

    foundNumber = {
      id: foundNumber.id,
      number: number || foundNumber.number
    }

    numbers.splice(index, 1, foundNumber)

    res.status(200).send(numbers)
  },
  searchForNumber: (req, res) => {
    const {search} = req.query
    let filteredNums =numbers.filter(value => {
      if(search == value.number){
        return value
      } else {
        return null
      }
    })
    res.status(200).send(filteredNums)
  }
}