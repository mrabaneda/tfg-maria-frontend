// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserCreateState {
  name: string | null;
  nameError?: string;
  email: string | null;
  emailError?: string;
  password: string | null;
  passwordError?: string;
  photoUrl: string | null;

  isCreating: boolean;
  isCreatingFormOpen: boolean;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserCreateState };
