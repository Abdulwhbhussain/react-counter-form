import React, { useState } from 'react'

export default function SimpleForm(){
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    // In a real app, you would send this data to a server
    setSubmitted({ ...form, time: new Date().toISOString() })
  }

  return (
    <section className="form">
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="submitted" aria-live="polite">
          <h3>Submitted</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </section>
  )
}
