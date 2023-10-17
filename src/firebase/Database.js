import { app } from "./index.js";
import { getDatabase, set, ref, get} from "firebase/database";

const db = getDatabase(app);

export const AddConmplainToDatabase = (Complain) =>{
    const uid = Date.now()

    set(ref(db, "complain/"+uid),{
        complain: Complain
    })    
}

export const SeeAllComplaints = () => {
    get(db, 'complain').then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}