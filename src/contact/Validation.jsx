// validation.jsx
const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const startsWithSpaceRegex = /^\s/;
    const endsWithSpaceRegex = /\s$/;
    const consecutiveSpaceRegex = /\s{2,}/;
  
    if (!name) {
      return "Name is required";
    }
    if (name.length < 4) {
        return ' Name must be at least 4 characters long.';
      }
    if (!nameRegex.test(name)) {
      return "Name must contain only letters and single spaces between words";
    }
  
    if (startsWithSpaceRegex.test(name) || endsWithSpaceRegex.test(name)) {
      return "Name cannot start or end with a space";
    }
  
    if (consecutiveSpaceRegex.test(name)) {
      return "Name cannot contain consecutive spaces";
    }
  
    return null;
  };
  
  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        return "Mobile number must be 10 digits";
    }
    return null;
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Invalid email address";
        }
    return null;
  };
  
  const validateMessage = (message) => {
    if (!message) {
        return "Message is required";
      }
      return null;
  };
  
  export { validateName, validateMobile, validateEmail, validateMessage };
  