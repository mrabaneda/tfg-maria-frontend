// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const isValidEmail = (email: string): boolean => {
  const [localPart, domain] = email.split("@");

  if (!localPart || !domain || !_isValidLocalPart(localPart) || !_isValidDomain(domain)) {
    return false;
  }

  return true;
};

const _isValidLocalPart = (localPart: string): boolean => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-";
  return localPart.split("").every((char) => validCharacters.includes(char));
};

const _isValidDomain = (domain: string): boolean => {
  const domainParts = domain.split(".");
  const tld = domainParts.pop();
  return domainParts.length > 0 && !!tld && tld.length >= 2;
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { isValidEmail };
