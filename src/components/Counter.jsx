import React, { useState } from 'react'

export default function Counter(){
  const [count, setCount] = useState(0)

  function increment(){ setCount(prev => prev + 1) }
  function decrement(){ setCount(prev => prev - 1) }
  function reset(){ setCount(0) }

  return (
    <section className="counter">
      <h2>Counter</h2>
      <div className="controls">
        <button onClick={decrement} aria-label="decrement">-</button>
        <span className="count" aria-live="polite">{count}</span>
        <button onClick={increment} aria-label="increment">+</button>
      </div>
      <div className="counter-actions">
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  )
}
