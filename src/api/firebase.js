import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, remove, get, set } from "firebase/database";
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
  // console.log(typeof product.category);
  const id = uuid();
  set(ref(database, `products/${product.category}/${id}`), {
    ...product,
    id: id,
    price: parseInt(product.price),
    image: imageUrl,
    size: product.size.split(","),
    // color: product.color.split(","),
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

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `cart/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `cart/${userId}/${productId}`));
}

export async function getCart(userId) {
  return get(ref(database, `cart/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addOrUpdateToDibbs(userId, product) {
  return set(ref(database, `dibbs/${userId}/${product.id}`), product);
}

export async function removeFromDibbs(userId, productId) {
  return remove(ref(database, `dibbs/${userId}/${productId}`));
}

export async function getDibbs(userId) {
  return get(ref(database, `dibbs/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function getOnlyBest() {
  return get(ref(database, `products`)) //
    .then((snapshot) => {
      // console.log(snapshot);
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

// 사실 위랑 똑같음 걍 쓰지머
export async function getOnlyNew() {
  return get(ref(database, `products`)) //
    .then((snapshot) => {
      // console.log(snapshot);
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function getAdminAuth(userId) {
  return set(ref(database, `admins`), userId);
}
