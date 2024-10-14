// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import { UserCreateState } from "../states/user_create.state";
import { useUserCreate } from "../hooks/use_user_create.hook";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface UserCreateValue {
  userCreateState: UserCreateState;
  setKeyWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage4: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openCreateUserForm: () => void;
  createFormSetVisible: (isVisible: boolean) => void;
  createUser: () => void;
}

interface UserCreateProps {
  children: ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserCreateContext = createContext<UserCreateValue>({} as UserCreateValue);

const UserCreateContextProvider: FC<UserCreateProps> = ({ children }) => {
  const {
    createState,
    handleKeyWordChange,
    handleNameChange,
    handleFileChange,
    handleFileChange1,
    handleFileChange2,
    handleFileChange3,
    handleFileChange4,
    openCreateForm,
    createFormSetVisible,
    createUser,
  } = useUserCreate();

  const userCreateValue: UserCreateValue = {
    userCreateState: createState,
    setKeyWord: handleKeyWordChange,
    setName: handleNameChange,
    setImage: handleFileChange,
    setImage1: handleFileChange1,
    setImage2: handleFileChange2,
    setImage3: handleFileChange3,
    setImage4: handleFileChange4,
    openCreateUserForm: openCreateForm,
    createFormSetVisible: createFormSetVisible,
    createUser: createUser,
  };

  return <UserCreateContext.Provider value={userCreateValue}>{children}</UserCreateContext.Provider>;
};

const useUserCreateContext = () => {
  const context = useContext(UserCreateContext);

  if (!context) {
    throw new Error("useUserCreateContext debe ser usada dentro de UserCreateProvider");
  }
  return context;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { UserCreateContextProvider, useUserCreateContext, UserCreateContext };
