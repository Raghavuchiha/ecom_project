import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Toggle between 'Login' and 'Sign Up'
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-full max-w-md p-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-light mb-6">
          {currentState === "Login" ? "Login —" : "Sign Up —"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Show Name input only for Sign Up */}
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded"
          />

          <div className="flex justify-between text-sm text-gray-600">
            <p className="cursor-pointer hover:underline">
              Forgot your password?
            </p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer hover:underline"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer hover:underline"
              >
                Login Here
              </p>
            )}
          </div>

          <button
            type="button"
            className="mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
