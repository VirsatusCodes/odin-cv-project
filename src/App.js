import React, { Component } from 'react'
import {General} from './components/General'
import {Education} from './components/Education'
import {Jobs} from './components/Jobs'
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
      },
      education: {
        schoolName: '',
        yearsOfStudy: '',
        degreeName: '',
      },
      jobs: {
        companyName: '',
        position: '',
        duration: '',
      },
    }
  }


SubmitBtn = (e) => {
  e.preventDefault();

  const type = e.target.dataset.value;
  const objKey = this.state[type]
  const totalObjItems = []

  for (const userItem in objKey) {
    totalObjItems.push(userItem)
  }
  const nonUpdatingObjItems = totalObjItems.filter(element => element !== 'submitted')

  if(objKey.submitted=== true) {
    this.setState({
      [type]: {
        [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
        [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
        [nonUpdatingObjItems[2]]: objKey[nonUpdatingObjItems[2]],
        submitted: false,
      }
    })

  } else this.setState({
    [type]: {
      [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
      [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
      [nonUpdatingObjItems[2]]: objKey[nonUpdatingObjItems[2]],
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

  for (const userItem in objKey) {
    totalObjItems.push(userItem)
  }
  const nonUpdatingObjItems = totalObjItems.filter(element => element !== info)
console.log(totalObjItems)
  this.setState({
    [type]:{
      [info]: value,
      [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
      [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
      [nonUpdatingObjItems[2]]: objKey[nonUpdatingObjItems[2]],
    }
  })
}

InputSubmittedCheck = (props) => {
  const {text, submitted, change, box, objSection} = props
  console.log(text)
  if(!submitted) {
    return (
        <input 
          type={'text'}
          className={'userInput'}
          onChange={change}
          placeholder={text}
          name={box}
          data-value={objSection}
          ></input>
    )
} else return (
  <p 
  className='submittedInfo'
  value={text}>
    {text}
  </p>
)
}

ButtonSubmittedCeck = (props) => {
  const {submitted, button, objSection} = props;
  if(!submitted) {
      return (
          <button 
          onClick={button}
          type='submit'
          data-value={objSection}>
            Submit
        </button>
      )
  } else return (
      <button 
      onClick={button}
      type='submit'
      data-value={objSection}>
        Edit 
    </button>
  )
}

  render() {
    const {general, education, jobs} = this.state
    return(
      <div>
        <form>
          <General  button={this.SubmitBtn} 
                    userInfo={general}
                    handleChange={this.handleChange}
                    InputCheck={this.InputSubmittedCheck}
                    BtnCheck={this.ButtonSubmittedCeck}/>

          <Education  button={this.SubmitBtn} 
                    userInfo={education}
                    handleChange={this.handleChange}
                    InputCheck={this.InputSubmittedCheck}
                    BtnCheck={this.ButtonSubmittedCeck}/>  

          <Jobs     button={this.SubmitBtn} 
                    userInfo={jobs}
                    handleChange={this.handleChange}
                    InputCheck={this.InputSubmittedCheck}
                    BtnCheck={this.ButtonSubmittedCeck}/>                              
        </form>
      </div>
    )
  }
}

export default App;