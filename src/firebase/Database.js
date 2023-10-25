import { app } from "./index.js";
import { getDatabase, set, ref, onValue,} from "firebase/database";

const db = getDatabase(app);

export const AddConmplainToDatabase = (Complain) =>{
    const uid = Date.now()
    set(ref(db, "complain/"+uid),{
        complain: Complain
    })    
}


export const SeeAllComplaints = (callback) => {
  const dbRef = ref(db, "complain");
  onValue(dbRef, (snapshot) => {
    let arr = [];
    snapshot.forEach((snapshotChild) => {
      let data = snapshotChild.val();
      arr.push(data);
    });
    console.log(arr);
    callback(arr);
  });
};