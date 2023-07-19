import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please add at least two uppercase!");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character!");
      return;
    }

    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.password !== password) {
            setError("Invalid password.");
          } else {
            localStorage.setItem("user", JSON.stringify(data));
            navigate(from, { replace: true });
            window.location.reload();
          }
        }
      })
      .catch((error) => setError("Invalid email or password."));
  };

  return (
    <div className="flex justify-center px-4 pt-5 lg:px-5 lg:pt-8">
      <form onSubmit={handleLogin} className="w-full md:max-w-md">
        <h2 className="text-xl md:text-3xl font-semibold uppercase tracking-tight">
          Sign In
        </h2>
        <p className="text-red-600">{error}</p>
        <p className="text-green-600">{success}</p>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="input w-full rounded-md p-2 mt-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="input w-full rounded-md p-2 mt-3"
          required
        />
        <input
          type="submit"
          value="Sign In"
          className="btn w-full text-base text-white font-bold bg-[#008ECC] cursor-pointer border-none rounded-md py-2 mt-4"
        />
        <p className="text-base text-center py-2">
          Not registered?
          <Link className="link text-[#008ECC] ml-1" to="">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
