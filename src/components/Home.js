import React, {Component} from 'react'
import Page from './Page'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      count: 1
    }
    this.handleCount = this.handleCount.bind(this)
  }

  handleCount(val) {
    this.setState({
      count: val + 1
    })
  }

  render(){
    return(
      <div>
      <Page 
      count={this.state.count}
      handleCount={this.handleCount}
      />
      </div>
    )
  }
}

export default Home;