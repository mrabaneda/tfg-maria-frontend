// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import { useCallback, useEffect, useRef } from "react";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const useMounted = () => {
  const mountedRef = useRef(false);

  const isMounted = useCallback(() => mountedRef.current, [mountedRef]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { useMounted };
