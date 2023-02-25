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
  const general = this.state.general
  if(general.submitted=== true) {
    this.setState({
      general: {
        name: general.name,
        phone: general.phone,
        email: general.email,
        submitted: false,
      }
    })

  } else this.setState({
    general: {
      name: general.name,
      phone: general.phone,
      email: general.email,
      submitted: true,
    }
  })
  console.log(this.state.general)
}

/* maybe to make handleChange and generalSubmitBtn usable by the other
sections of my resume i could somehow use a for...in loop to create
a setState modifier for each and update only the one that is 
being currently changed, i have a crude version of that that
relies on setState being the same number of items in each
object section for handleChange */

handleChange = (e) => {
  const type = e.target.dataset.value;
  const value= e.target.value;
  const info = e.target.name;
  const objKey = this.state[type]
  const totalObjItems = []

  for (const userItem in this.state[type]) {
    totalObjItems.push(userItem)
  }
  const nonUpdatingObjItems = totalObjItems.filter(element => element !== info)

  this.setState({
    [type]:{
      [info]: value,
      [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
      [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
      submitted: objKey.submitted,
    }
  })
}


  render() {
    const {general} = this.state

    return(
      <div>
        <form>
          <General  button={this.GeneralSubmitBtn} 
                    userInfo={general}
                    handleChange={this.handleChange}/>        
        </form>
      </div>
    )
  }
}


export default App;
