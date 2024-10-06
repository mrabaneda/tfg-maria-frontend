// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

"use client";

import Modal from "../../shared/components/dialog/modal";
import HomeMenuItem from "./components/home_menu_item";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="flex gap-[30px]">
      <HomeMenuItem title="Usuarios Administradores" />
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Home;
