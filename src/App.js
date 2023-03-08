import React, {useState, useEffect} from 'react';
import {General} from './components/General'
import {Education} from './components/Education'
import {Jobs} from './components/Jobs'
import './App.css';

const App = () => {

  const [data, setData] = useState(
    {
      general: {
        name: 'test',
        phone: '',
        email: '',
        submitted: false,
      }/* ,
      education: {
        schoolName: '',
        yearsOfStudy: '',
        degreeName: '',
        submitted: false,
      },
      jobs: {
        companyName: '',
        position: '',
        duration: '',
        submitted: false,
      }, */
    }
  )

const SubmitBtn = (e) => {
  e.preventDefault();

  const type = e.target.dataset.value;
  const objKey = [type]
  const totalObjItems = []

  console.log(type, objKey)

  for (const userItem in objKey) {
    console.log(userItem, objKey)
    totalObjItems.push(userItem)
  }
  const nonUpdatingObjItems = totalObjItems.filter(element => element !== 'submitted')

  if(objKey.submitted=== true) {
    [`setData`]({
        [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
        [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
        [nonUpdatingObjItems[2]]: objKey[nonUpdatingObjItems[2]],
        submitted: false,
      })
  

  } else {
  [`setData`]({
      [nonUpdatingObjItems[0]]: objKey[nonUpdatingObjItems[0]],
      [nonUpdatingObjItems[1]]: objKey[nonUpdatingObjItems[1]],
      [nonUpdatingObjItems[2]]: objKey[nonUpdatingObjItems[2]],
      submitted: true,
    })
  console.log(data.general)
}
}


const handleChange = (e) => {
  const {name, value, dataset} = e.target
  console.log('1',name, '2',value,'3', dataset.value)
  console.log(e.target)
    setData({
      ...data,
      [dataset.value]:{
        ...data[dataset.value],
        [name]: e.target.value
      }
    });
  }

  
  const ButtonSubmittedCheck = (props) => {
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

console.log(data.general.name)
    return(
      <div>
        <form>
          <General  userInfo={data.general}
                    onChange={handleChange}
                    button={SubmitBtn}
                    BtnCheck={ButtonSubmittedCheck}/>        
{/* 
          <Education  button={SubmitBtn} 
                    userInfo={data.education}
                    handleChange={handleChange}
                    InputCheck={InputSubmittedCheck}
                    BtnCheck={ButtonSubmittedCeck}/>  

          <Jobs     button={SubmitBtn} 
                    userInfo={data.jobs}
                    handleChange={handleChange}
                    InputCheck={InputSubmittedCheck}
                    BtnCheck={ButtonSubmittedCeck}/>      */}                         
        </form>
      </div>
    )
  }


export default App;