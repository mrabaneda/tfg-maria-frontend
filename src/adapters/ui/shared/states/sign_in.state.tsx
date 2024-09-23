// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface SignInState {
  email: string | null;
  password: string | null;
  signingIn: boolean;
  signInError?: string;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { SignInState };
