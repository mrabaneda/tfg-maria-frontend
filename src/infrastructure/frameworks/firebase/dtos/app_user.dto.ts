// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { Scheme } from "@/src/core/value_objects/scheme";
import { UID } from "@/src/core/value_objects/types";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AppUserDto {
    uid: UID;
    displayName: string;
    email: string;
}

const AppUserDtoScheme: Scheme<AppUserDto> = {
    uid: "uid",
    displayName: "displayName",
    email: "email",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AppUserDto };

export { AppUserDtoScheme };