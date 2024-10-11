// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCreateAdminUserUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/create_admin_user_use_case.context";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { useAdminUserCreateContext } from "../contexts/admin_user_create.context";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { isValidEmail } from "../helpers/utils";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserCreate = () => {
  const {
    adminUserCreateState: { name, email, password, photoUrl, isCreating },
    setName,
    setNameError,
    setEmail,
    setEmailError,
    setPassword,
    setPasswordError,
    setPhotoUrl,
    setCreatingAdminUser,
    openCreateAdminForm,
    closeCreateAdminForm,
  } = useAdminUserCreateContext();

  const isMounted = useMounted();
  const { createAdminUsersUseCase } = useCreateAdminUserUseCaseContext();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handlePhotoUrlChange = (value: string) => {
    setPhotoUrl(value);
  };

  const openCreateForm = () => openCreateAdminForm();

  const closeCreateForm = () => closeCreateAdminForm();

  const createAdminUser = async () => {
    try {
      if (!isMounted()) return;

      if (!name || !email || !password) {
        alert("Los campos han de estar rellenos");
        return;
      }

      const adminUserCreateModel: AdminUserCreateModel = {
        name: name!,
        email: email!,
        password: password!,
        photoUrl: photoUrl,
      };

      if (adminUserCreateModel.name.length < 1 || adminUserCreateModel.name.length > 20)
        setNameError("El nombre del administrador/a debe tener entre 1 y 20 caracteres.");

      if (adminUserCreateModel.email.length < 1 || !isValidEmail(adminUserCreateModel.email)) setEmailError("El email debe ser un email válido.");

      if (adminUserCreateModel.password.length < 6 || adminUserCreateModel.name.length > 20)
        setPasswordError("La contraseña debe tener entre 6 y 20 caracteres.");

      setCreatingAdminUser(true);
      await createAdminUsersUseCase.execute(adminUserCreateModel);

      setCreatingAdminUser(false);
      closeCreateAdminForm();
      alert("Se ha creado el administrador/a correctamente");
    } catch (error: any) {
      if (!isMounted()) {
        alert(error.message ?? "Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
        closeCreateAdminForm();
      }
    }
  };
  return {
    name,
    email,
    password,
    photoUrl,
    isCreating,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePhotoUrlChange,
    openCreateForm,
    closeCreateForm,
    createAdminUser,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserCreate };
