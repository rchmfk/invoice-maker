'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export const useProtectedRoute = (requiredRole: "Client" | "Admin") => {
  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const userId = user.uid;

        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('userId', '==', userId));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data()

          if (!userData || userData.role !== requiredRole) {
            const redirectPath = userData?.role === 'Admin' ? '/admin' : '/client';
            router.push(redirectPath);
          }
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        router.push('/error');
      }
    });

    return () => unsubscribe();
  }, [router, requiredRole, db]);
};
