// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { AppUserDto } from "../dtos/app_user.dto";
import AppUser from "@/src/core/entities/app_user";
import { UserFactory } from "../factory/user.factory";
import { firebaseAuthInstance } from "../firebase.service";
import { ErrorException, UnauthorizedException } from "@/src/helpers/errors";
import BaseAuthRepository from "@/src/core/repositories/auth_repository.abstract";
import { signInWithEmailAndPassword, UserCredential, UserInfo } from "firebase/auth";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class FirebaseAuthRepository implements BaseAuthRepository {
    private userFactory: UserFactory;

    constructor() {
        this.userFactory = new UserFactory();
    }


    async signIn(email: string, password: string): Promise<AppUser> {
        try {
            const firebaseAuthUser: UserCredential = await signInWithEmailAndPassword(firebaseAuthInstance, email, password);

            const providerData: UserInfo | undefined = firebaseAuthUser.user.providerData.at(0);

            if (!providerData) {
                throw new Error('No provider data found for the user.');
            }
            const appUserDto: AppUserDto = {
                uid: providerData.uid,
                displayName: providerData.displayName || '',
                email: providerData.email || '',
            };

            return this.userFactory.appUserDtoToEntity(appUserDto);
        } catch (error: any) {
            throw new UnauthorizedException(error.message ?? JSON.stringify(error));
        }
    }

    async signOut(): Promise<void> {
        try {
            await firebaseAuthInstance.signOut();
        } catch (error: any) {
            throw new ErrorException(error.message ?? JSON.stringify(error));
        }
    }

    async getUserToken(): Promise<string> {
        try {
            const currentUser = firebaseAuthInstance.currentUser;
            if (!currentUser) {
                throw new UnauthorizedException('No current user found.');
            }

            const token = await currentUser.getIdToken();
            if (!token) {
                throw new ErrorException('No token available.');
            }

            return token;
        } catch (error: any) {
            throw new ErrorException(error.message ?? JSON.stringify(error));

        }
    }

}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default FirebaseAuthRepository;