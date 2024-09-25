// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const firebaseAuthInstance = getAuth(app);

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { firebaseAuthInstance };
