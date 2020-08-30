import {useState, useEffect} from 'react';
import {projectStorage, projectFireStore, timeStamp} from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            const fileName = file.name;
            await collectionRef.add({fileName, url, createdAt})
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}

const deleteDoc = (selectedFile) => {
    projectFireStore
        .collection('images')
        .doc(selectedFile.id)
        .delete()
        .then(()=> {});

    projectStorage
        .ref()
        .child(selectedFile.fileName)
        .delete()
        .then(()=>{});
}

export  { useStorage, deleteDoc };