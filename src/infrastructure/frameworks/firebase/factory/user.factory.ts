// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import User from "@/src/core/entities/user";
import AppUser from "@/src/core/entities/app_user";
import AdminUser from "@/src/core/entities/admin_user";
import { UserDto, UserDtoScheme } from "../dtos/user.dto";
import { AdminUserDto, AdminUserDtoScheme } from "../dtos/admin_user.dto";
import { AppUserDto, AppUserDtoScheme } from "../dtos/app_user.dto";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class UserFactory {
    appUserDtoToEntity(appUserDto: AppUserDto): AppUser {
        return {
            userId: appUserDto[AppUserDtoScheme.uid],
            name: appUserDto[AppUserDtoScheme.displayName],
            email: appUserDto[AppUserDtoScheme.email],
        };
    }


    adminUserDtoToEntity(adminUserdto: AdminUserDto): AdminUser {
        return {
            userId: adminUserdto[AdminUserDtoScheme.userId],
            email: adminUserdto[AdminUserDtoScheme.email],
            name: adminUserdto[AdminUserDtoScheme.name],
            createdAt: adminUserdto[AdminUserDtoScheme.createdAt],
            updatedAt: adminUserdto[AdminUserDtoScheme.updatedAt],
        };
    }

    userDtoToEntity(userDto: UserDto): User {
        return {
            uid: userDto[UserDtoScheme.uid],
            name: userDto[UserDtoScheme.name],
            imageId: userDto[UserDtoScheme.imageId],
            preferences: userDto[UserDtoScheme.preferences],
            createdAt: userDto[UserDtoScheme.createdAt],
            updatedAt: userDto[UserDtoScheme.updatedAt],
        };
    }
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserFactory };