import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        // console.log(admins);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addNewProduct(product, imageUrl, timeStamp) {
  const id = uuid();
  set(ref(database, `products/${product.category}/${id}`), {
    ...product,
    id: id,
    price: parseInt(product.price),
    image: imageUrl,
    size: product.size.split(","),
    color: product.color.split(","),
    timeStamp: timeStamp,
  });
}

export async function getProducts(category) {
  return get(ref(database, `products/${category}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
      // console.log(snapshot.val());
    }
    return [];
  });
}