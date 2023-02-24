import React, { Component } from 'react'
import {General} from './components/General'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: '',
        phone: '',
        email: '',
        submitted: false,
      }
    }
  }


GeneralSubmitBtn = (e) => {
  e.preventDefault();
  this.setState({
    general: {
      submitted:true,
    }
  })
  console.log(this.state.general)
}

handleChange = (e) => {
  const value= e.target.value;
  const info = e.target.name;
  console.log(value, info)
  this.setState({
    general: {
      [info]:value,
    }
  })
}


  render() {
    const {general} = this.state

    return(
      <div>
        <form>
          <General  button={this.GeneralSubmitBtn} 
                    info={general}
                    handleChange={this.handleChange}/>        
        </form>
      </div>
    )
  }
}


export default App;
