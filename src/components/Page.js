import React, {Component} from 'react'

class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
    }
  }
  
  render(){
    const {count, handleCount} = this.props
    return(
      <div>
        count:{count}
        <button onClick={() => handleCount(count)}>Click me</button>
      </div>
    )
  }
}

export default Page;