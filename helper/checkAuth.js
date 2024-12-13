import { auth } from "@/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const isUserLoggedInServer = () => {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(
            (user) => {
                // Immediately unsubscribe to avoid memory leaks
                unsubscribe();

                // Resolve with true if user exists, false otherwise
                resolve(!!user);
            },
            (error) => {
                // If there's an error, resolve as false
                console.error("Authentication check error:", error);
                resolve(false);
            }
        );
    });
};


export const isUserLoggedIn = () => {
    return !!auth.currentUser;
};
