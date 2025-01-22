import { db } from '@/services/firebase';  // Ensure you're importing your Firestore instance
import { doc, getDoc } from 'firebase/firestore';

export const getUserById = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return {
        id: userDoc.id,
        ...userDoc.data(),
      };
    } else {
      return null; // Return null if user does not exist
    }
  } catch (e) {
    console.error('Error getting user data: ', e);
    throw new Error('Error getting user');
  }
};