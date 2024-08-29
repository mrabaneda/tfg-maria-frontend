// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React from "react";
import Image from "next/image";
import valeLogo from "@/adapters/ui/shared/assets/vale_logo.png";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-16 pb-36 bg-white border-t-2">
            <div className="flex-shrink-0 p-2 rounded-full bg-white mb-24">
                <Image
                    className="w-32 h-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
                    src={valeLogo}
                    alt="Asociación VALE"
                />
            </div>
            <Image
                className="w-20 md:w-20 lg:w-32"
                src={valeLogo}
                alt="Asociación VALE"
            />
        </div>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Footer;