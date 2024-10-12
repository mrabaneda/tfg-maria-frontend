// --------------------------------
// Helpers
// --------------------------------

interface AdminUserCreateModel {
  email: string;
  password: string;
  name: string;
  image: Blob; 
}

// --------------------------------
// Public Interface
// --------------------------------

export type { AdminUserCreateModel };
