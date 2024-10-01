// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

class AppUserEntity {
  constructor(
    private readonly _userId: UID,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _photoUrl: string | null
  ) {
    if (!this._userId || this._userId.trim().length === 0) {
      throw new Error("AdminUserEntity: userId is required and cannot be empty.");
    }
    if (!this._name || this._name.trim().length === 0) {
      throw new Error("AdminUserEntity: name is required and cannot be empty.");
    }
    if (!this._email || this._email.trim().length === 0) {
      throw new Error("AdminUserEntity: email is required and cannot be empty.");
    }
  }

  public get userId() {
    return this._userId;
  }
  public get name() {
    return this._name;
  }
  public get email() {
    return this._email;
  }
  public get photoUrl() {
    return this._photoUrl;
  }
}
// --------------------------------
// Public Interface
// --------------------------------

export type { AppUserEntity };
