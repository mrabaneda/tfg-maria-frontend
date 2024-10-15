// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { FC } from "react";
import FormInputText from "../../../shared/components/input/form_input_text";
import { useUserCreateContext } from "../contexts/user_create.context";
import FormInputImage from "../../../shared/components/input/form_input_image";
import FormInputSelect from "../../../shared/components/input/form_input_select";
import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const UserCreateFormBody: FC = () => {
  const { userCreateState, setKeyWord, setName, setPreference, setImage, setImage1, setImage2, setImage3, setImage4 } = useUserCreateContext();

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
      <FormInputSelect
        label="Seleccione la preferencia de refuerzo del nuevo usuario/a"
        id={"preference"}
        name="preference"
        options={[
          { value: PreferencesTypeEnum.NONE, label: "Ninguna" },
          { value: PreferencesTypeEnum.TEXT, label: "Texto" },
          { value: PreferencesTypeEnum.AUDIO, label: "Audio" },
          { value: PreferencesTypeEnum.IMAGES, label: "Imágenes" },
        ]}
        onChange={setPreference}
      ></FormInputSelect>
      <FormInputImage label="Adjunte la foto de perfil del nuevo usuario/a" id={"image"} name="image" onChange={setImage}></FormInputImage>
      <FormInputImage label="Adjunte la primera foto de la contraseña" id={"image1"} name="image1" onChange={setImage1}></FormInputImage>
      <FormInputImage label="Adjunte la segunda foto de la contraseña" id={"image2"} name="image2" onChange={setImage2}></FormInputImage>
      <FormInputImage label="Adjunte la tercera foto de la contraseña" id={"image3"} name="image3" onChange={setImage3}></FormInputImage>
      <FormInputImage label="Adjunte la cuarta foto de la contraseña" id={"image4"} name="image4" onChange={setImage4}></FormInputImage>
    </form>
  );
};

// -------------------------------------------------------
// Public interface
// -------------------------------------------------------

export default UserCreateFormBody;
