// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";

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
      <input id="image" name="image" type="file" onChange={setImage} accept="image/*" />
      {adminUserCreateState.passwordError && <small className="text-sm text-red-600">{adminUserCreateState.passwordError}</small>}
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default AdminUserCreateFormBody;
