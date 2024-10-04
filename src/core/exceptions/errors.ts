// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

class WarningException extends Error { }

class ErrorException extends Error { }

class UnauthorizedException extends Error { }

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { WarningException, ErrorException, UnauthorizedException };