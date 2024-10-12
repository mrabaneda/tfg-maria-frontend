// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

interface AdminUserCreateDto {
  email: string;
  password: string;
  name: string;
  image: Blob;
}

const AdminUserCreateDtoScheme: { [K in keyof AdminUserCreateDto]: K } = {
  email: "email",
  password: "password",
  name: "name",
  image: "image",
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export type { AdminUserCreateDto };

export { AdminUserCreateDtoScheme };
