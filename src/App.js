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
      },
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
      },
    }
  )

const SubmitBtn = (e) => {
  e.preventDefault();

 const {dataset} = e.target
 
 if(!data[dataset.value].submitted) {
  setData({
    ...data,
      [dataset.value]:{
        ...data[dataset.value],
        submitted: true
      }
    })} else {
      setData({
    ...data,
      [dataset.value]:{
        ...data[dataset.value],
        submitted: false
      }
    })
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
  
    return(
      <div>
        <form>
          <General  userInfo={data.general}
                    onChange={handleChange}
                    button={SubmitBtn}/>        

          <Education  userInfo={data.education}
                      onChange={handleChange}
                      button={SubmitBtn}/>  

          <Jobs userInfo={data.jobs}
                onChange={handleChange}
                button={SubmitBtn}/>                         
        </form>
      </div>
    )
  }


export default App;