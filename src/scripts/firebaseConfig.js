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

const db = firebase.firestore(app);

function requestProducts(
    onResponse = () => { },
    onFinally = () => { },
    hasFilter = false,
    categoryName = ""
) {
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
    const productSearched = db.collection("products").doc(productID);

    productSearched
        .get()
        .then((response) => onResponse(createFirebaseObject(response)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

function createOrder(order, onResponse) {
    const orders = db.collection("orders");
    orders
        .add(order)
        .then(({ id }) => onResponse(id))
        .catch((error) => console.log(error));
}

async function updateProductsStock(cart) {
    const firebaseProducts = db.collection("products").where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        cart.map((item) => item.product.id)
    );

    const batch = db.batch();
    const itemsOutOfStock = [];

    function updateDocs(docs) {
        docs.forEach((doc, index) => {
            const { stock: databaseStock } = doc.data();
            const {
                quantity: cartItemQuantity,
                product: { id: productId },
            } = cart[index];

            if (databaseStock >= cartItemQuantity)
                batch.update(doc.ref, { stock: databaseStock - cartItemQuantity });
            else itemsOutOfStock.push(productId);
        });
    }

    const query = await firebaseProducts.get();
    updateDocs(query.docs);

    if (itemsOutOfStock.length === 0) {
        batch.commit();
        return {
            items: [],
            hasErrorOnSubmit: false,
        };
    } else {
        return {
            items: cart.filter((item) => !itemsOutOfStock.includes(item.product.id)),
            hasErrorOnSubmit: true,
        };
    }
}

export {
    requestCategories,
    requestProducts,
    requestProduct,
    createOrder,
    updateProductsStock,
};
