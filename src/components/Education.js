import React from "react";
import {InputSubmittedCheck} from './renderFormats/InputSubmittedChecker'
import {ButtonSubmittedCheck} from './renderFormats/ButtonSubmittedChecker'

const Education = ({
  userInfo, 
  onChange,
  button,
}) => {
  return (
    <div className="section">
      <div className="nameInputPair">
        <p className="inputDescribers">School of study:</p>
        <InputSubmittedCheck
          userInfo={userInfo.schoolName}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'schoolName'}
          objSection={'education'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">Years you attended school:</p>
        <InputSubmittedCheck
          userInfo={userInfo.yearsOfStudy}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'yearsOfStudy'}
          objSection={'education'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">Your degree you pursued:</p>
        <InputSubmittedCheck
          userInfo={userInfo.degreeName}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'degreeName'}
          objSection={'education'}
        />
      </div>
      <ButtonSubmittedCheck
          submitted={userInfo.submitted}
          button={button}
          objSection={'education'}
          />
    </div>
  )
}

export {Education}