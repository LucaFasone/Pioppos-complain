import React from 'react'
import Style from './App.module.css'
  function App() {
  return (
    <div className={Style.MainContainer}>
      <h1 className={Style.MainText}>
        Pioppo's Complain
      </h1>
      <textarea className={Style.TextArea} name="TextArea" cols="23" rows="8"></textarea>
      <button className={Style.SubmitButton}>Invia feedback al lattugo</button>
    </div>

  )
}

export default App