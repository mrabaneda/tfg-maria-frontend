// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UID } from "../value_objects/types";
import { PreferencesTypeEnum } from "../value_objects/preferences_type_enum_value";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserEntity {
  constructor(
    private readonly _userId: UID,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _photoUrl: string | null, // TODO: revisar si mejor ruta a bucket
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
    private readonly _preference: PreferencesTypeEnum
  ) {
    if (!this._userId || this._userId.trim().length === 0) {
      throw new Error("UserEntity: userId is required and cannot be empty.");
    }
    if (!this._name || this._name.trim().length === 0) {
      throw new Error("UserEntity: name is required and cannot be empty.");
    }
    if (!this._email || this._email.trim().length === 0) {
      throw new Error("UserEntity: email is required and cannot be empty.");
    }
    if (!this._createdAt) {
      throw new Error("UserEntity: created date is required.");
    }
    if (!this._updatedAt) {
      throw new Error("UserEntity: update date is required.");
    }
    if (!Object.values(PreferencesTypeEnum).includes(this._preference)) {
      throw new Error("UserEntity: a valid preference is required.");
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
  public get createdAt() {
    return this._createdAt;
  }
  public get updatedAt() {
    return this._updatedAt;
  }
  public get preference() {
    return this._preference;
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserEntity };
