import { db } from "@/services/firebase";
import { addUserData } from "@/typescript/entities/User";
import { addDoc, collection } from "firebase/firestore";

export const useAddUser = async (userData: addUserData) => {
  const collectionUserRef = collection(db, "users");

  await addDoc(collectionUserRef, userData);
};
