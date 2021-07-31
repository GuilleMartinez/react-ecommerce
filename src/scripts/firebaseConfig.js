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

const createDocsArray = (docs) => docs.map((doc) => createFirebaseObject(doc));

const createFirebaseObject = (doc) => ({ id: doc.id, ...doc.data() });

function requestProducts(
    onResponse = () => { },
    onFinally = () => { },
    hasFilter = false,
    categoryName = ""
) {
    const db = firebase.firestore(app);

    const productsCollection = hasFilter
        ? db.collection("products").where("category", "==", categoryName)
        : db.collection("products");

    productsCollection
        .get()
        .then((response) => onResponse(createDocsArray(response.docs)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

function requestCategories(onResponse = () => { }, onFinally = () => { }) {
    const db = firebase.firestore(app);

    const categoriesCollection = db.collection("categories");

    categoriesCollection
        .get()
        .then((response) => onResponse(createDocsArray(response.docs)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

function requestProduct(
    onResponse = () => { },
    onFinally = () => { },
    productID = ""
) {
    const db = firebase.firestore(app);

    const productSearched = db.collection("products").doc(productID);

    productSearched
        .get()
        .then((response) => onResponse(createFirebaseObject(response)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

export { requestCategories, requestProducts, requestProduct };
