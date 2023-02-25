import React from "react";

/* submitted check should be shared this is the
format ill use for all sections, either import it from
here or put it in a central location not sure which
would be considered "best practice" */
const General = (props) => {
const {button, userInfo, handleChange, InputCheck, BtnCheck} = props

    return (
        <div className='section'>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Name:</p>
            <InputCheck
                text={userInfo.name} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='name'
                objSection='general'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Phone #:</p>
            <InputCheck
                text={userInfo.phone} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='phone'
                objSection='general'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Email:</p>
            <InputCheck
                text={userInfo.email} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='email'
                objSection='general'/>
          </div>
          <BtnCheck
          submitted={userInfo.submitted}
          button={button}
          objSection='general'
          />
          </div>
    )
}

export {General}