import { useState, useEffect } from 'react';
import { projectFireStore} from "../firebase/config";

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
        //projectFireStore.collection returns an function that unsubscribes the collection.
        //to clean up the grid, that function can be used.
        return () => unsub();
        }
    , [collection])

    return {docs};
}

export default useFireStore;