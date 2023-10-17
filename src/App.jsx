import React, { useState } from 'react'
import Style from './App.module.css'
import ListBox from './Components/ListBox'
import {AddConmplainToDatabase} from './firebase/Database.js'

function App() {
    const [complain, setComplain ] = useState("")
    const AddComplain = () =>{
      AddConmplainToDatabase(complain)
    }
  return (
    <div className={Style.MainContainer}>
      <h1 className={Style.MainText}>
        Pioppo's Complain
      </h1>
      <textarea className={Style.TextArea} value={complain} onChange={e=>setComplain(e.target.value)} name="TextArea" cols="23" rows="8"></textarea>
      <button onClick={AddComplain} className={Style.SubmitButton}>Invia feedback al lattugo</button>
      <ListBox/>
    </div>
  )
}

export default App