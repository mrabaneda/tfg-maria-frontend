// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { LoginEntity } from "@/src/core/domain/entities/login.entity";
import { LoginPasswordVO } from "@/src/core/domain/value_objects/login_password.vo";
import { LoginDto } from "../dtos/login.dto";
import { LoginPasswordDto } from "../dtos/login_password.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class LoginFactory {
  static loginDtoToEntity(loginDto: LoginDto): LoginEntity {
    return {
      uid: loginDto.uid,
      email: loginDto.email,
      photoUrl: loginDto.photoUrl,
      photoRelativePath: loginDto.photoRelativePath,
      photoName: loginDto.photoName,
      passwordModel: loginDto.passwordModel.map(LoginFactory._loginPasswordDtoToEntity),
    };
  }

  private static _loginPasswordDtoToEntity(loginPasswordDto: LoginPasswordDto): LoginPasswordVO {
    return {
      photoUrl: loginPasswordDto.photoUrl,
      passwordPiece: loginPasswordDto.passwordPiece,
      photoRelativePath: loginPasswordDto.photoRelativePath,
      photoName: loginPasswordDto.photoName,
    };
  }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { LoginFactory };
