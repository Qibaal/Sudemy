import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from "@/config/firebaseConfig.js";

export const signUpWithEmail = async (email, password, fullName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        await addDoc(collection(db, 'users'), {
            fullName: fullName,
            email: user.email,
            uid: user.uid
        });

        return { success: true, user };
    } catch (error) {
        console.error('Error signing up:', error.message);
        return { success: false, error: error.message };
    }
};

export const signInWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Error signing in:', error.message);
        return { success: false, error: error.message };
    }
};

export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();

        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            await addDoc(usersRef, {
                fullName: user.displayName,
                email: user.email,
                uid: user.uid
            });
        } else {
            console.log('User already exists in Firestore.');
        }

        return { success: true, user };
    } catch (error) {
        console.error('Error signing in with Google:', error.message);
        return { success: false, error: error.message };
    }
};
