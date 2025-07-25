import { useState } from "react";

function Register() {
  // ===== STATE MANAGEMENT =====
  // Store all form field values
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Store validation error messages
  const [errors, setErrors] = useState({
    confirmPassword: "",
  });

  // ===== INPUT HANDLER =====
  // Handles changes for ALL text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data while preserving other fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear password mismatch error while typing
    if (name === "password" || name === "confirmPassword") {
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  // ===== VALIDATION LOGIC =====
  const validateForm = () => {
    let isValid = true;
    const newErrors = { confirmPassword: "" };

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ===== FORM SUBMISSION =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Registration submitted:", formData);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center mb-4">Heading</h1>

          {/* ===== REGISTRATION FORM ===== */}
          <form onSubmit={handleSubmit} noValidate>
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Surname */}
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="form-control"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
