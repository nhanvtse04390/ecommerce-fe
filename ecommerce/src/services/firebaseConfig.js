import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase của ứng dụng web của bạn
const firebaseConfig = {
    apiKey: "AIzaSyCYxjRtnuUpq96H1VDMk6yVS1mx_HaJxV0",
    authDomain: "ecommner.firebaseapp.com",
    projectId: "ecommner",
    storageBucket: "ecommner.appspot.com",
    messagingSenderId: "1022272539638",
    appId: "1:1022272539638:web:26eca637487173d50515d7",
    measurementId: "G-5RH68JD5Z4"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Thiết lập các dịch vụ Firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, auth, googleProvider, storage };
