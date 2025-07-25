import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form onSubmit={handleSubmit}>
            {/* email field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* password field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Forgot password - dummy link for visual purpose only */}
            <div className="mb-3 text-end">
              <p>Forgot your password?</p>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-decoration-none">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
