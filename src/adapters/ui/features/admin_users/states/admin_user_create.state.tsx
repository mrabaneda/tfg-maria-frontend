// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserCreateState {
  name: string;
  nameError: string | null;
  email: string;
  emailError: string | null;
  password: string;
  passwordError: string | null;
  image: Blob | null,
  isCreating: boolean;
  isCreatingFormOpen: boolean;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserCreateState };
