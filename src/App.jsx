import React from 'react'
import Counter from './components/Counter'
import SimpleForm from './components/SimpleForm'

export default function App(){
  return (
    <div className="app-container">
      <h1>React Counter & Form</h1>
      <Counter />
      <hr />
      <SimpleForm />
    </div>
  )
}
