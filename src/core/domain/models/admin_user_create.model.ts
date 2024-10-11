// --------------------------------
// Helpers
// --------------------------------

interface AdminUserCreateModel {
  email: string;
  password: string;
  name: string;
  photoUrl: string | null;
}

// --------------------------------
// Public Interface
// --------------------------------

export type { AdminUserCreateModel };
