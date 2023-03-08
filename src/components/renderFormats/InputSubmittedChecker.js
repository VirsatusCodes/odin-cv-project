import React from "react";

const InputSubmittedCheck = ({
    userInfo, 
    onChange,
    submitted,
    name,
    objSection,
  }) => {
    if(!submitted) {
      return (
        <div>
          <input 
            type={'text'}
            className={'userInput'}
            value={userInfo}
            onChange={onChange}
            name={name}
            data-value={objSection}
            />
        </div>
      )
    } else {
      return (
        <p 
        className='submittedInfo'>
            {userInfo}
        </p>
      )
    }
  }

  export {InputSubmittedCheck}