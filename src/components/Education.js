import React from "react";

/* submitted check should be shared this is the
format ill use for all sections, either import it from
here or put it in a central location not sure which
would be considered "best practice" */
const Education = (props) => {
const {button, userInfo, handleChange, InputCheck, BtnCheck} = props

    return (
        <div className='section'>
          <div className='nameInputPair'>
            <p className='inputDescribers'>School of study:</p>
            <InputCheck
                text={userInfo.schoolName} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='schoolName'
                objSection='education'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>Years you attended school:</p>
            <InputCheck
                text={userInfo.yearsOfStudy} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='yearsOfStudy'
                objSection='education'/>
          </div>
          <div className='nameInputPair'>
            <p className='inputDescribers'>The degree you pursued:</p>
            <InputCheck
                text={userInfo.degreeName} 
                submitted={userInfo.submitted}
                change={handleChange}
                box='degreeName'
                objSection='education'/>
          </div>
          <BtnCheck
          submitted={userInfo.submitted}
          button={button}
          objSection='education'
          />
          </div>
    )
}

export {Education}