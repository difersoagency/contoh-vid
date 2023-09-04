import {
    collection,
    getDocs,
    getFirestore,
} from "firebase/firestore";

// call vue query
export const getMessages = async () => {
    const message = [];
    const snap = await getDocs(collection(getFirestore(), 'MessagesInfo'));
    snap.forEach((doc) => {
        result.push({id: doc.id, ...doc.data() });
    });

    return message;
}