// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { PreferencesTypeEnum } from "@/src/core/domain/enums/preferences_type.enum";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const entityPreferenceToViewModel = (preference: PreferencesTypeEnum): string => {
  switch (preference) {
    case PreferencesTypeEnum.NONE:
      return "Ninguna";
    case PreferencesTypeEnum.AUDIO:
      return "Audio";
    case PreferencesTypeEnum.IMAGES:
      return "Imágenes";
    case PreferencesTypeEnum.TEXT:
      return "Texto";
    default:
      throw new Error("La preferencia no existe.");
  }
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { entityPreferenceToViewModel };
