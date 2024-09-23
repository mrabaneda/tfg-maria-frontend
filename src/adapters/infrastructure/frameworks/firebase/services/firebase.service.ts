// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const firebaseAuthInstance = getAuth(app);

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { firebaseAuthInstance };
