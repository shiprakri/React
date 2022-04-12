import React, {useRef} from 'react'
import ChildComp from './RefsWithEventBinding_Child';


function ParentFunctionComp() {
  const childCompRef = useRef()
  return (
    <div>
      <button onClick={() => childCompRef.current.showAlert()}>Click Me</button>
      <ChildComp ref={childCompRef} />
      
    </div>
  )
}
export default ParentFunctionComp;

