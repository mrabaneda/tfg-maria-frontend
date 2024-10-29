// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { UserEntity } from "@/src/core/domain/entities/user.entity";
import { UserDto } from "../dtos/user.dto";
import { UserCreateModel } from "@/src/core/domain/models/user_create.model";
import { UserCreateDtoScheme } from "../dtos/user_create.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
  static userDtoToEntity(userdto: UserDto): UserEntity {
    return {
      uid: userdto.uid,
      name: userdto.name,
      email: userdto.email,
      photoUrl: userdto.photoUrl,
      preference: userdto.preference,
    };
  }

  static userCreateModelToFormData(userCreateModel: UserCreateModel): FormData {
    const formData = new FormData();
    formData.append(UserCreateDtoScheme.keyWord, userCreateModel.keyWord);
    formData.append(UserCreateDtoScheme.password, userCreateModel.password);
    formData.append(UserCreateDtoScheme.name, userCreateModel.name);
    formData.append(UserCreateDtoScheme.preference, userCreateModel.preference);
    formData.append(UserCreateDtoScheme.image, userCreateModel.image);
    formData.append(UserCreateDtoScheme.image1, userCreateModel.image1);
    formData.append(UserCreateDtoScheme.image2, userCreateModel.image2);
    formData.append(UserCreateDtoScheme.image3, userCreateModel.image3);
    formData.append(UserCreateDtoScheme.image4, userCreateModel.image4);
    return formData;
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };
