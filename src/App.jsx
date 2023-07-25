import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count + 1);
  }
  const decrement = ()=>{
    setCount(count - 1);
  }

  return (
    <>
      <div className='container'>
        <div className='gradient'>
          {count}
        </div>
        <div className='btns'>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
