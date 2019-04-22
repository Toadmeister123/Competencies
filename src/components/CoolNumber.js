import React, {Component} from 'react'

class CoolNumber extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }

  componentDidMount(){
    console.log(this.props.match.params.id)
      this.setState({
        number: this.props.match.params.id
      })
  }

  render(){
    return(
      <div>
        {this.state.number}
      </div>
    )
  }
}

export default CoolNumber