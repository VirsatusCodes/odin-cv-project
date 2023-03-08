import React from "react";
import {InputSubmittedCheck} from './renderFormats/InputSubmittedChecker'
import {ButtonSubmittedCheck} from './renderFormats/ButtonSubmittedChecker'

const General = ({
  userInfo, 
  onChange,
  button,
}) => {
  return (
    <div className="section">
      <div className="nameInputPair">
        <p className="inputDescribers">Name:</p>
        <InputSubmittedCheck
          userInfo={userInfo.name}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'name'}
          objSection={'general'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">Phone #:</p>
        <InputSubmittedCheck
          userInfo={userInfo.phone}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'phone'}
          objSection={'general'}
        />
      </div>
      <div className="nameInputPair">
        <p className="inputDescribers">Email:</p>
        <InputSubmittedCheck
          userInfo={userInfo.email}
          onChange={onChange}
          submitted={userInfo.submitted}
          name={'email'}
          objSection={'general'}
        />
      </div>
      <ButtonSubmittedCheck
          submitted={userInfo.submitted}
          button={button}
          objSection={'general'}
          />
    </div>
  )
}

export {General}
