import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const useGetFirestore = () => {

    const [ data, setData ] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"))
                console.log(querySnapshot);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return data
}

export default useGitFirestore;