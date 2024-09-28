// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { User } from "firebase/auth";
import { AppUserEntity } from "@/src/core/entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthUserFactory {
  static firebaseAuthUserToEntity(firebaseAuthUser: User): AppUserEntity {
    return {
      userId: firebaseAuthUser.uid,
      email: firebaseAuthUser.email!,
      name: firebaseAuthUser.displayName!,
      photoUrl: firebaseAuthUser.photoURL,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FirebaseAuthUserFactory };
