// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useReducer } from "react";
import crypto from "crypto";
import { UserCreateController } from "../controllers/user_create.controller";
import { UserCreateState } from "../states/user_create.state";
import { useMounted } from "../../../shared/hooks/use_mounted";
import { useUserGridContext } from "../contexts/user_grid.context";
import { useCreateUserUseCaseContext } from "@/src/adapters/infrastructure/di/use_cases/user/create_user_use_case.context";
import { UserCreateModel } from "@/src/core/domain/models/user_create.model";
import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useUserCreate = () => {
  const [state, dispatch] = useReducer(UserCreateController, {
    keyWord: "",
    keyWordError: null,
    name: "",
    nameError: null,
    preference: null,
    image: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    isCreating: false,
    isCreateFormOpen: false,
  } satisfies UserCreateState);

  const isMounted = useMounted();

  const { refreshGrid } = useUserGridContext();

  const { createUsersUseCase } = useCreateUserUseCaseContext();

  const handleKeyWordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMounted()) dispatch({ type: "SET_KEYWORD", keyWord: target.value });
  };

  const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMounted()) dispatch({ type: "SET_NAME", name: target.value });
  };

  // TODO: section selection
  // const handlePreferenceChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   if (isMounted()) dispatch({ type: "SET_PREFERENCE", preference: target.value });
  // };

  const handleFileChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE", image: file });
  };

  const handleFileChange1 = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE1", image1: file });
  };

  const handleFileChange2 = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE2", image2: file });
  };

  const handleFileChange3 = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE3", image3: file });
  };

  const handleFileChange4 = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    if (!files || files.length === 0) return;
    const file = files.item(0);
    if (!file) return;
    if (isMounted()) dispatch({ type: "SET_IMAGE4", image4: file });
  };

  const openCreateForm = () => {
    if (isMounted()) dispatch({ type: "OPEN_CREATE_FORM" });
  };

  const createFormSetVisible = (isVisible: boolean) => {
    if (isMounted()) dispatch({ type: "CREATE_FORM_SET_VISIBLE", isVisible: isVisible });
  };

  const createUser = async () => {
    try {
      if (!isMounted()) return;

      if (!state.keyWord.trim()) {
        if (isMounted()) dispatch({ type: "SET_KEYWORD_ERROR", error: "Debe rellenar este campo." });
        return;
      }

      if (!state.name.trim()) {
        if (isMounted()) dispatch({ type: "SET_NAME_ERROR", error: "Debe rellenar este campo." });
        return;
      }

      if (state.name.trim().length > 20) {
        if (isMounted()) dispatch({ type: "SET_NAME_ERROR", error: "La longitud debe ser inferior a 20 caracteres" });
        return;
      }

      if (!state.image) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      if (!state.image1) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      if (!state.image2) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      if (!state.image3) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      if (!state.image4) {
        alert("Por favor seleccione una imagen.");
        return;
      }

      const userCreateModel: UserCreateModel = {
        keyWord: state.keyWord.trim(),
        name: state.name.trim(),
        password: crypto
          .randomBytes(6)
          .toString("base64")
          .slice(0, 6)
          .replace(/[^a-zA-Z0-9]/g, ""),
        preference: PreferencesTypeEnum.NONE, // TODO: manage preference,
        image: state.image,
        image1: state.image1,
        image2: state.image2,
        image3: state.image3,
        image4: state.image4,
      };

      if (isMounted()) dispatch({ type: "SET_IS_CREATING", isCreating: true });

      await createUsersUseCase.execute(userCreateModel);

      refreshGrid();

      if (isMounted()) dispatch({ type: "CLOSE_CREATE_FORM" });

      alert("Se ha creado el usuario/a correctamente");
    } catch (error: any) {
      if (isMounted()) dispatch({ type: "SET_IS_CREATING", isCreating: false });
      alert(error.message ?? "Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return {
    createState: state,
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
  };
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useUserCreate };
