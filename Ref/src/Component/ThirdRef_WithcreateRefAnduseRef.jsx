import React, { useState, useRef, createRef } from "react";

const UseRefAndCreateRefDemo = () => {
  const [counter, setCounter] = useState(1)

  const useRefDemo = useRef()
  const createRefDemo = createRef()

  if (!useRefDemo.current){
    console.log('----Called USEREF at Initial Render----')
    useRefDemo.current = counter
  }

  if (!createRefDemo.current){
    console.log('----Called CREATEREF at Every Render----')
    createRefDemo.current = counter
  }

  const handleCounter = () => {
    setCounter(counter => counter + 1)
  }

  return (
    <>
      Counter : {counter}<hr/>
      UseRef Value : {useRefDemo.current}<hr/>
      CreateRef Value : {createRefDemo.current}<hr/>
      <button onClick={handleCounter}>Click Here</button>
    </>
  )
}

export default UseRefAndCreateRefDemo;