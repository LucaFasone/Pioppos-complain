import React, { useState } from 'react'
import Style from './App.module.css'
import Menu from './Components/MenuList.jsx'
import {AddConmplainToDatabase} from './firebase/Database.js'

function App() {
    const [complain, setComplain ] = useState("")
    const AddComplain = () =>{
      AddConmplainToDatabase(complain)
    }
  return (
    <div className="grid place-items-center">
      <h1 className={Style.MainText}>
        Pioppo's Complain
      </h1>
      <textarea className={Style.TextArea} value={complain} onChange={e=>setComplain(e.target.value)} name="TextArea" cols="23" rows="8"> </textarea>
      <button onClick={AddComplain} className="block bg-gray-200 rounded-md border-2 my-2  w-full sm:w-72 shadow-sm">Invia feedback al lattugo</button>
      <Menu/>
    </div>
  )
}

export default App