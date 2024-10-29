// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";
import FormInputImage from "../../../shared/components/input/form_input_image";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AdminUserCreateFormBody: FC = () => {
  const { adminUserCreateState, setEmail, setImage, setName, setPassword } = useAdminUserCreateContext();

  return (
    <form className="space-y-4 pb-3 select-none">
      <FormInputText
        id="name"
        name="name"
        label="Nombre del administrador/a"
        value={adminUserCreateState.name}
        onChange={setName}
        placeholder="Introduce un nombre de usuario"
        isDisabled={adminUserCreateState.isCreating}
      />
      {adminUserCreateState.nameError && <small className="text-sm text-red-600">{adminUserCreateState.nameError}</small>}
      <FormInputText
        id="email"
        name="email"
        label="Email del administrador/a"
        value={adminUserCreateState.email}
        onChange={setEmail}
        placeholder="Introduce un email"
        isDisabled={adminUserCreateState.isCreating}
      />
      {adminUserCreateState.emailError && <small className="text-sm text-red-600">{adminUserCreateState.emailError}</small>}
      <FormInputText
        id="password"
        name="password"
        label="Contraseña del administrador/a"
        value={adminUserCreateState.password}
        type="password"
        onChange={setPassword}
        placeholder="Introduce una contraseña"
        isDisabled={adminUserCreateState.isCreating}
      />
      {adminUserCreateState.passwordError && <small className="text-sm text-red-600">{adminUserCreateState.passwordError}</small>}
      <FormInputImage
        label="Seleccione una foto de perfil para el nuevo administrador/a"
        id="image"
        name="image"
        onChange={setImage}
      ></FormInputImage>
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default AdminUserCreateFormBody;
