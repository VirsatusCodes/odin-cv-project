import React from "react";

const InputSubmittedCheck = ({
    userInfo, 
    onChange,
    submitted
  }) => {
    if(!submitted) {
      return (
        <div>
          <input 
            type={'text'}
            className={'userInput'}
            value={userInfo.name}
            onChange={onChange}
            />
        </div>
      )
    } else {
      return (
        <p 
        className='submittedInfo'>
          {userInfo.name}
        </p>
      )
    }
  }

  export {InputSubmittedCheck}