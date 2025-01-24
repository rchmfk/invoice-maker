import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "@/services/firebase";

// Fungsi untuk menambah client
export const addClient = async (client: { name: string; address: string; phoneNumber: string; userId: string }) => {
  try {
    const docRef = await addDoc(collection(db, 'clients'), client);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('Error adding client');
  }
};

// Fungsi untuk mengambil semua clients
export const getClients = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'clients'));
    const clients = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return clients;
  } catch (e) {
    console.error('Error getting documents: ', e);
    throw new Error('Error getting clients');
  }
};

// Fungsi untuk mengupdate client
export const updateClient = async (id: string, client: { name: string; address: string; phoneNumber: string; userId: string }) => {
  try {
    const clientRef = doc(db, 'clients', id);
    await updateDoc(clientRef, client);
    console.log('Document updated');
  } catch (e) {
    console.error('Error updating document: ', e);
    throw new Error('Error updating client');
  }
};

// Fungsi untuk menghapus client
export const deleteClient = async (id: string) => {
  try {
    const clientRef = doc(db, 'clients', id);
    await deleteDoc(clientRef);
    console.log('Document deleted');
  } catch (e) {
    console.error('Error deleting document: ', e);
    throw new Error('Error deleting client');
  }
};