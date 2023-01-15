import React from 'react'
import { Button } from 'semantic-ui-react'

 function ButtonExampleEmphasis  () {
    
    let isActive = true;
    let isFloated=true;
    let btnColor = 'green';

return(
  <div>
    <Button active={isActive} floated="right" content="Submit" color={btnColor} type='submit'/>

  </div>
)}

export default ButtonExampleEmphasis