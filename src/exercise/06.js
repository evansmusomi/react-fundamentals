// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

  /* extra 1 - Refs
  const usernameInputRef = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }*/

  /* extra 2 - useState for Errors
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null: 'Username must be lower case')
  }

  const errorMessage = error ? (<div role="alert" style={{color:'red'}}>{error}</div>): null

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} id="usernameInput" type="text" onChange={handleChange} />
      </div>
      {errorMessage}
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )*/

  /* extra 3 - Controlled Forms
  const [username, setUsername] = useState('')
  const handleChange = (event) => {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )*/
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
