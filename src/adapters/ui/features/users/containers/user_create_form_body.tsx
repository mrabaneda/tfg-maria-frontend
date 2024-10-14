// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import { useUserCreateContext } from "../contexts/user_create.context";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserCreateFormBody: FC = () => {
  const { userCreateState, setKeyWord, setName, setImage, setImage1, setImage2, setImage3, setImage4 } = useUserCreateContext();

  return (
    <form className="space-y-4 pb-3 select-none">
      <FormInputText
        id="name"
        name="name"
        label="Nombre del usuario/a"
        value={userCreateState.name}
        onChange={setName}
        placeholder="Introduce un nombre de usuario"
        isDisabled={userCreateState.isCreating}
      />
      {userCreateState.nameError && <small className="text-sm text-red-600">{userCreateState.nameError}</small>}
      <FormInputText
        id="name"
        name="name"
        label="Palabra clave del usuario/a"
        value={userCreateState.keyWord}
        onChange={setKeyWord}
        placeholder="Introduce una palabra clave para identificar a este usuario/a"
        isDisabled={userCreateState.isCreating}
      />
      {userCreateState.keyWordError && <small className="text-sm text-red-600">{userCreateState.keyWordError}</small>}
      <input id="image" name="image" type="file" onChange={setImage} accept="image/*" />
      <input id="image1" name="image1" type="file" onChange={setImage1} accept="image/*" />
      <input id="image2" name="image2" type="file" onChange={setImage2} accept="image/*" />
      <input id="image3" name="image3" type="file" onChange={setImage3} accept="image/*" />
      <input id="image4" name="image4" type="file" onChange={setImage4} accept="image/*" />
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default UserCreateFormBody;
