import React from "react";

const SubmittedCheck = (props) => {
    const {text, submitted, change, box} = props
    console.log(text)
    if(!submitted) {
      return (
          <input 
            type={'text'}
            className={'userInput'}
            onChange={change}
            placeholder={text}
            info={text}
            name={box}
            ></input>
      )
  } else return (
    <p 
        className='submittedInfo'
        value={text}
        >name is{text}</p>
  )
  }

const General = (props) => {
const {button, info, handleChange} = props

    return (
        <div className='section'>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Name:</p>
            <SubmittedCheck
                text={info.name} 
                submitted={info.submitted}
                change={handleChange}
                box='name'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Phone #:</p>
            <SubmittedCheck 
                text={info.phone} 
                submitted={info.submitted}
                change={handleChange}
                box='phone'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Email:</p>
            <SubmittedCheck 
                text={info.email} 
                submitted={info.submitted}
                change={handleChange}
                box='email'/>
          </div>
          <button 
            onClick={button}
            type='submit'>
              Submit General Information
          </button>
          </div>
    )
}

export {General}