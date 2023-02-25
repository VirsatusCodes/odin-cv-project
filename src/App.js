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
  const general = this.state.general

  e.preventDefault();
  this.setState({
    general: {
      name: general.name,
      phone: general.phone,
      email: general.email,
      submitted: true,
    }
  })
  console.log(this.state.general)
}

handleChange = (e) => {
  const value= e.target.value;
  const info = e.target.name;
  const general = this.state.general
  const totalObjItems = ['name', 'phone', 'email']
  const nonUpdatingObjItems = totalObjItems.filter(element => element !== info)

  this.setState({
    general:{
      [info]: value,
      [nonUpdatingObjItems[0]]: general[nonUpdatingObjItems[0]],
      [nonUpdatingObjItems[1]]: general[nonUpdatingObjItems[1]],
      submitted: general.submitted,
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
