import React, { useEffect, useState } from 'react'
import { SeeAllComplaints } from '../firebase/Database.js'

function List() { 
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    SeeAllComplaints((data) => {
      setComplaints(data);
    });
  }, []);

 console.log(complaints);
  return (
    <div>
      {complaints.map((complaint, key) => {
        return (
          <div key={key}>{complaint.complain}</div>
        )
      })}
    </div>
  )
}

export default List