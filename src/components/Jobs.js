import React from "react";

/* submitted check should be shared this is the
format ill use for all sections, either import it from
here or put it in a central location not sure which
would be considered "best practice" */
const Jobs = (props) => {
const {button, userInfo, handleChange, InputCheck, BtnCheck} = props

    return (
        <div className='section'>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Where did you work:</p>
            <InputCheck
                text={userInfo.companyName} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='companyName'
                objSection='jobs'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>What position did you hold there #:</p>
            <InputCheck
                text={userInfo.position} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='position'
                objSection='jobs'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>How long were you there:</p>
            <InputCheck
                text={userInfo.duration} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='duration'
                objSection='jobs'/>
          </div>
          <BtnCheck
          submitted={userInfo.submitted}
          button={button}
          objSection='jobs'
          />
          </div>
    )
}

export {Jobs}