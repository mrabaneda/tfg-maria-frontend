// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import type { Metadata } from "next";
import "@/adapters/ui/shared/style/index.css";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

interface RootLayoutProps {
  children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

export const metadata: Metadata = {
  title: "Gestión Usuarios - VALE",
  description: "Web de gestión de los usuarios de la App móvil de la asociación VALE",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body></body>
    </html>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default RootLayout;
