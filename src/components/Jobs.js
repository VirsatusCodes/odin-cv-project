import React from "react";
import {InputSubmittedCheck} from './renderFormats/InputSubmittedChecker'
import {ButtonSubmittedCheck} from './renderFormats/ButtonSubmittedChecker'

const Jobs = ({
  userInfo, 
  onChange,
  button,
}) => {
  return (
    <div className="section">
      <div className="nameInputPair">
        <p className="inputDescribers">Where did you work:</p>
        <InputSubmittedCheck
          userInfo={userInfo.companyName}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'companyName'}
          objSection={'jobs'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">What position did you hold there:</p>
        <InputSubmittedCheck
          userInfo={userInfo.position}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'position'}
          objSection={'jobs'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">How long were you there:</p>
        <InputSubmittedCheck
          userInfo={userInfo.duration}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'duration'}
          objSection={'jobs'}
        />
      </div>
      <ButtonSubmittedCheck
          submitted={userInfo.submitted}
          button={button}
          objSection={'jobs'}
          />
    </div>
  )
}

export {Jobs}