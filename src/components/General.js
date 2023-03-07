import React from "react";
import {InputSubmittedCheck} from './renderFormats/InputSubmittedChecker'

const General = ({
  userInfo, 
  onChange,
}) => {
  return (
    <div className="section">
      <div className="nameInputPair">
        <p className="inputDescribers">Name:</p>

        <InputSubmittedCheck
          userInfo={userInfo}
          onChange={onChange}
          submitted={userInfo.submitted}
        />
      </div>
    </div>
  )
}

export {General}


