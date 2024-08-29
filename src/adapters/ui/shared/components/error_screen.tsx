"use client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React from "react";
import Image from "next/image";
import errorImage from "../../shared/assets/error_404_cat.jpg";

// -------------------------------------------------------
// Models
// -------------------------------------------------------

type ErrorScreenProps = {
    title?: string;
    message?: string;
};

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const ErrorScreen: React.FC<ErrorScreenProps> = ({ title, message }) => {
    return (
        <div className="flex flex-col justify-start items-center h-screen container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center pt-20 px-20 sm:px-10">
                {title ?? "Algo salió mal"}
            </h1>
            <Image
                className={`w-1/3 sm:w-1/2  py-10`}
                src={errorImage}
                alt="Error..."
                style={{ minWidth: "250px" }}
            />
            <h1 className="inline-block text-1xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-center px-20 sm:px-10 ">
                {message ??
                    "Se ha producido un error inesperado, por favor, inténtelo de nuevo más tarde."}
            </h1>
        </div>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { ErrorScreen };