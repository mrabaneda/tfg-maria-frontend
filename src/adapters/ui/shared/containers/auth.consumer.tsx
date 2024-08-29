"use-client";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------
import Navbar from "./navbar";
import { useContext } from "react";
import Footer from "../components/footer";
import AuthContext from "../contexts/auth.context";
import { ErrorScreen } from "../components/error_screen";
import { LoadingScreen } from "../components/loading_screen";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface AuthConsumerProps {
    children: React.ReactNode;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const AuthConsumer: React.FC<AuthConsumerProps> = ({ children }) => {
    const { authState } = useContext(AuthContext);

    return authState.loading ? (
        <LoadingScreen />
    ) : authState.error ? (
        <ErrorScreen message={authState.error} title="Error" />
    ) : (
        <>
            <Navbar />
            <main className="bg-white p-4">{children}</main>
            <Footer />
        </>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { AuthConsumer };