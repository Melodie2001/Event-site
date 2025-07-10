import {
collection,
getDocs,
} from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
export default{
    async getAllData(path) {
    const querySnapshot = await getDocs(collection(db, path));
    const list = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        data: doc.data(),
      };
    });
    return list;
  },}