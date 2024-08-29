"use client";

import { SignInContext, SignInContextProvider } from "./context/sign_in.context";

// -------------------------------------------------------
// Requirements
// -------------------------------------------------------


// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Home: React.FC = () => {
    return (
        <SignInContextProvider>
            <SignInContext.Consumer>
                {({ signInState: { email } }) => (
                    <div className="mb-20 w-full">
                        <div className={combineClasses("bg-white", selectedUser && isUserDetailsVisible ? "hidden" : "block")}>
                            <HomeGrid />
                        </div>
                        {selectedUser && isUserDetailsVisible && <HomeUserDetail user={selectedUser} />}
                    </div>
                )}
            </SignInContext.Consumer>
        </SignInContextProvider>
    );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Home;