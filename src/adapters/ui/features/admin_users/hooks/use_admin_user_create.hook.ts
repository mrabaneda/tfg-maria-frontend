// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useReducer } from "react";
import { AdminUserCreateModel } from "@/src/core/domain/models/admin_user_create.model";
import { useCreateAdminUserUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/admin/create_admin_user_use_case.context";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { AdminUserCreateController } from "../controllers/admin_user_create.controller";
import { AdminUserCreateState } from "../states/admin_user_create.state";
import { isValidEmail } from "../helpers/utils";
import { useAdminUserGridContext } from "../contexts/admin_user_grid.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useAdminUserCreate = () => {
  const [state, dispatch] = useReducer(AdminUserCreateController, {
    name: "",
    email: "",
    password: "",
    nameError: null,
    emailError: null,
    passwordError: null,
    image: null,
    isCreating: false,
    isCreateFormOpen: false,
  } satisfies AdminUserCreateState);

  const isMounted = useMounted();

  const { refreshGrid } = useAdminUserGridContext();

  const { createAdminUsersUseCase } = useCreateAdminUserUseCaseContext();

  const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMounted()) dispatch({ type: "SET_NAME", name: target.value });
  };

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMounted()) dispatch({ type: "SET_EMAIL", email: target.value });
  };

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMounted()) dispatch({ type: "SET_PASSWORD", password: target.value });
  };

  const handleFileChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE", image: file });
  };

  const openCreateForm = () => {
    if (isMounted()) dispatch({ type: "OPEN_CREATE_FORM" });
  };

  const createFormSetVisible = (isVisible: boolean) => {
    if (isMounted()) dispatch({ type: "CREATE_FORM_SET_VISIBLE", isVisible: isVisible });
  };

  const createAdminUser = async () => {
    try {
      if (!isMounted()) return;

      if (!state.name.trim()) {
        if (isMounted()) dispatch({ type: "SET_NAME_ERROR", error: "Debe rellenar este campo." });
        return;
      }

      if (state.name.trim().length > 20) {
        if (isMounted()) dispatch({ type: "SET_NAME_ERROR", error: "La longitud debe ser inferior a 20 caracteres" });
        return;
      }

      if (!state.email.trim()) {
        if (isMounted()) dispatch({ type: "SET_EMAIL_ERROR", error: "Debe rellenar este campo." });
        return;
      }

      if (!isValidEmail(state.email.trim())) {
        if (isMounted()) dispatch({ type: "SET_EMAIL_ERROR", error: "Debe introducir un email válido." });
        return;
      }

      if (!state.password.trim()) {
        if (isMounted()) dispatch({ type: "SET_PASSWORD_ERROR", error: "Debe rellenar este campo." });
        return;
      }

      if (state.password.trim().length < 6) {
        if (isMounted()) dispatch({ type: "SET_PASSWORD_ERROR", error: "La contraseña debe tener mínimo 6 caracteres." });
        return;
      }

      if (!state.image) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      const adminUserCreateModel: AdminUserCreateModel = {
        name: state.name.trim(),
        email: state.email.trim(),
        password: state.password.trim(),
        image: state.image,
      };

      if (isMounted()) dispatch({ type: "SET_IS_CREATING", isCreating: true });

      await createAdminUsersUseCase.execute(adminUserCreateModel);

      refreshGrid();

      if (isMounted()) dispatch({ type: "CLOSE_CREATE_FORM" });

      alert("Se ha creado el administrador/a correctamente");
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_IS_CREATING", isCreating: false });
      alert(error.message ?? "Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return {
    createState: state,
    handleNameChange,
    handleEmailChange,
    handleFileChange,
    handlePasswordChange,
    openCreateForm,
    createFormSetVisible,
    createAdminUser,
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useAdminUserCreate };
