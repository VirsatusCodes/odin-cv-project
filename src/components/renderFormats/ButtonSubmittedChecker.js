import React from "react";

const ButtonSubmittedCheck = ({
    submitted,
    button, 
    objSection
}) => {

    if(!submitted) {
      return (
          <button 
          onClick={button}
          type='submit'
          data-value={objSection}>
            Submit
        </button>
      )
    } else return (
      <button 
      onClick={button}
      type='submit'
      data-value={objSection}>
        Edit 
    </button>
  )
}

export {ButtonSubmittedCheck}