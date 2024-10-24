// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "@/src/core/domain/value_objects/types";
import { LoginPasswordDto } from "./login_password.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface LoginDto {
  uid: UID;
  email: string;
  photoUrl: string;
  photoRelativePath: string;
  photoName: string;
  passwordModel: LoginPasswordDto[];
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { LoginDto };
