import React, {Component} from 'react'
import axios from 'axios'
import Number from './Number'

class Numbers extends Component {
  constructor(props){
    super(props)
    this.state = {
      numbers: [],
      number: 0,
      editing: false,
      search: ''
    }
    this.setEdit = this.setEdit.bind(this)
    this.updateNumber = this.updateNumber.bind(this)
  }

  handleNumber(val) {
    this.setState({
      number: val
    })
    console.log(this.state.number)
  }

  componentDidMount(){
    axios.get('/api/getNumbers').then(res => {
      console.log(res)
      this.setState({
        numbers: res.data,
        number: 0
      })
    })
  }

  createNumber( number) {
    axios.post('/api/createNumber', {number}).then(res => {
      this.setState({
        numbers: res.data,
        number: 0
      })
    })
  }

  updateNumber(id){
    const {number} = this.state
    axios.put(`api/updateNumber/${id}`, {number}).then(res => {
      this.setState({
        numbets: res.data,
        number: 0
      })
    })
  }

  searchNumber = () => {
    const {search} = this.state
    axios.get(`/api/searchfornumber?search=${search}`).then(res => {
      this.setState({
        numbers: res.data
      })
    })
  }

  setEdit(number){
    this.setState({
      number
    })
  }

  render(){
    console.log(this.state.search)
    const {number} = this.state
    const mappedNumbers = this.state.numbers.map(number => {
      return(
      <Number 
      key={number.id}
      number={number}
      updateNumber={this.updateNumber}
      setEdit={this.setEdit}
      />

      )
    })
    return(
      <div>
        <input placeholder="Search" onChange={(e) => this.setState({
          search: e.target.value
        })}></input>
        <button onClick={() => this.searchNumber()}>search</button>
        <input type='text' placeholder="Enter Number" onChange={(e) => this.handleNumber(e.target.value)}></input>
        <button onClick={() => this.createNumber(number)}>Submit Number</button>
        {mappedNumbers}
      </div>
    )
  }
}


export default Numbers;
