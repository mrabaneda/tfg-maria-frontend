// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import { useAdminUserCreate } from "../hooks/use_admin_user_create.hook";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";
import FormInputText from "../../../shared/components/input/form_input_text";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserCreateFormBody: FC = () => {
  const { handleNameChange, handleEmailChange, handlePasswordChange, handlePhotoUrlChange } = useAdminUserCreate();

  const {
    adminUserCreateState: { name, nameError, email, emailError, password, passwordError, photoUrl, isCreating },
  } = useAdminUserCreateContext();

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleNameChange(event.target.value);
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleEmailChange(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange(event.target.value);
  };

  const handlePhotoUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePhotoUrlChange(event.target.value);
  };

  return (
    <form className="space-y-4 pb-3 select-none">
      <FormInputText
        id="name"
        name="Nombre del administrador/a"
        label="Nombre del administrador/a"
        value={name ?? ""}
        onChange={(e) => handleNameInput(e)}
        placeholder="Introduce un nombre de usuario"
        isDisabled={isCreating}
      />
      {nameError && <small className="text-sm text-red-600">{nameError}</small>}
      <FormInputText
        id="email"
        name="Email del administrador/a"
        label="Email del administrador/a"
        value={email ?? ""}
        onChange={(e) => handleEmailInput(e)}
        placeholder="Introduce un email"
        isDisabled={isCreating}
      />
      {emailError && <small className="text-sm text-red-600">{emailError}</small>}
      <FormInputText
        id="password"
        name="Contraseña del administrador/a"
        label="Contraseña del administrador/a"
        value={password ?? ""}
        type="password"
        onChange={(e) => handlePasswordInput(e)}
        placeholder="Introduce una contraseña"
        isDisabled={isCreating}
      />
      {passwordError && <small className="text-sm text-red-600">{passwordError}</small>}
      <FormInputText
        id="photoUrl"
        name="Foto de perfil del administrador/a (opcional)"
        label="Foto de perfil del administrador/a (opcional)"
        value={photoUrl ?? ""}
        type="url"
        onChange={(e) => handlePhotoUrlInput(e)}
        placeholder="Introduce la url de tu imagen"
        isDisabled={isCreating}
      />
    </form> // TODO: gestionar photoUrl input
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default AdminUserCreateFormBody;
