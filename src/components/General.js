import React from "react";

/* submitted check should be shared this is the
format ill use for all sections, either import it from
here or put it in a central location not sure which
would be considered "best practice" */

const InputSubmittedCheck = (props) => {
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
    value={text}
    >{text}</p>
  )
  }

  const ButtonSubmittedCeck = (props) => {
    const {submitted, button} = props;
    if(!submitted) {
        return (
            <button 
            onClick={button}
            type='submit'>
              Submit General Information
          </button>
        )
    } else return (
        <button 
        onClick={button}
        type='submit'>
          Edit General Information
      </button>
    )

  }

const General = (props) => {
const {button, userInfo, handleChange} = props

    return (
        <div className='section'>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Name:</p>
            <InputSubmittedCheck
                text={userInfo.name} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='name'
                objSection='general'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Phone #:</p>
            <InputSubmittedCheck 
                text={userInfo.phone} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='phone'
                objSection='general'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Email:</p>
            <InputSubmittedCheck 
                text={userInfo.email} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='email'
                objSection='general'/>
          </div>
          <ButtonSubmittedCeck
          submitted={userInfo.submitted}
          button={button}
          />
          </div>
    )
}

export {General}