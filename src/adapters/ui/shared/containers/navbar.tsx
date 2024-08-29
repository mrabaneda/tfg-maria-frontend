// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import Image from "next/image";
import React, { useContext } from "react";
import AuthContext from "../contexts/auth.context";
import logo from "@/adapters/ui/shared/assets/vale_logo.png";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Navbar: React.FC = () => {
    const {
        authState: { user },
    } = useContext(AuthContext);

    return (
        <div className="bg-white p-4 flex justify-between items-center border-b-2">
            <div className="h-20 w-20 mr-10 select-none">
                <Image src={logo} alt="Asociación Vale" className="h-20 w-20 mr-5 select-none" priority={true} />
            </div>
            {user && (
                <div className="flex flex-row items-center justify-end space-x-5">
                    <span className="font-normal text-green-700 select-none hidden sm:block">
                        {`¡HOLA, ${user.displayName.toUpperCase()}!`}
                    </span>
                </div>
            )}
        </div>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Navbar;