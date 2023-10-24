import React from 'react'
import { SeeAllComplaints } from '../firebase/Database.js'

function List() {
  SeeAllComplaints()
  return (
    <div>List</div>
  )
}

export default List