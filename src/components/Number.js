import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Number extends Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false
    }
  }

  edit() {
    const {number} = this.props
    this.setState({
      editing: true
    })
    this.props.setEdit(number.number)
  }

  updateNumber(id){
    this.props.updateNumber(id)

    this.setState({
      editing: false
    })
  }

  render(){
    const { number } = this.props
    return(
      <div >
        <Link to={`/CoolNumber/${number.id}`}><h1>{number.number}</h1></Link>
        {this.state.editing ? (
          <button onClick={() => this.updateNumber(number.id)}>Save</button>
        ) : (
          <button onClick={() => this.edit()}>Edit</button>
        )}
      </div>
      )
  }
}

export default Number