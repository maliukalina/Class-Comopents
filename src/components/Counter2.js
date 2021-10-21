import {useState, useEffect} from 'react'

function Counter2 ({name}) {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${counter} times`
    return () => {
      document.title = " !! React App !!"
    }
  }, [counter])
   return (
  <>
       <h1>{name} clicked the button {counter} times.</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Click me!
       </button>
      </>
    )
   }

export default Counter2