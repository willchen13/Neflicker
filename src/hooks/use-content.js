import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                setContent(
                    snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        docID: doc.id,
                    }))
                )
            })
            .catch((error) => console.log(error.message))
    }, [])
    return { [target]: content }
}
