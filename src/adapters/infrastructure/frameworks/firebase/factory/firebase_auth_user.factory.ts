// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { User } from "firebase/auth";
import { AppUserEntity } from "@/src/core/domain/entities/app_user.entity";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthUserFactory {
  static firebaseAuthUserToEntity(firebaseAuthUser: User): AppUserEntity {
    return new AppUserEntity(firebaseAuthUser.uid, firebaseAuthUser.displayName!, firebaseAuthUser.email!, firebaseAuthUser.photoURL); // TODO: revisar !!
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { FirebaseAuthUserFactory };
