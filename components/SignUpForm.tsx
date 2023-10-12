"use client";
import InputField from "./InputField";
const SignUpForm = () => {
  const validateEmail = (value: any) => {
    if (!value) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "Please enter a valid email";
    }
    return "";
  };

  // Validation function for the password field
  const validatePassword = (value: any) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return "";
  };

  return (
    <form>
      <InputField
        label="Email"
        placeholder="Enter your email"
        validator={validateEmail}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        validator={validatePassword}
      />
      {/* Add more input fields as needed, and their respective validation functions */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
