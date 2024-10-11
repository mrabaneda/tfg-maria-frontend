// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserCreateDto {
  email: string;
  password: string;
  name: string;
  photoUrl: string | null;
}

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserCreateDto };
