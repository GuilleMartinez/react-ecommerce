import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCZVzvjxShnvfFudb0gzFjGYiJlmsEnJcE",
    authDomain: "react-ecommerce-9f16c.firebaseapp.com",
    projectId: "react-ecommerce-9f16c",
    storageBucket: "react-ecommerce-9f16c.appspot.com",
    messagingSenderId: "333753510959",
    appId: "1:333753510959:web:fdcb019bbd5176581b6ada",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const createDocsArray = (docs) =>
    docs.map((doc) => ({ id: doc.id, ...doc.data() }))

function getFromFirebase(
    collectionName,
    onResponse = () => { },
    onFinally = () => { },
    hasFilter = false,
    filterParameter = { attr: "", compare: "", value: "" }
) {
    const db = firebase.firestore(app);
    const itemsCollection = hasFilter
        ? db
            .collection(collectionName)
            .where(filterParameter.attr, filterParameter.compare, filterParameter.value)
        : db.collection(collectionName);

    itemsCollection
        .get()
        .then((response) => onResponse(createDocsArray(response.docs)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

export default getFromFirebase;