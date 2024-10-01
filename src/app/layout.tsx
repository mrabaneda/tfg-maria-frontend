// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import type { Metadata } from "next";
import { AppContext } from "../adapters/ui/shared/contexts/app.context";
import fav_icon from "../adapters/ui/shared/assets/vale_logo_fav_icon.png";
import "../adapters/ui/shared/style/index.css";

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
  icons: [{ rel: "icon", url: fav_icon.src }],
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default RootLayout;
