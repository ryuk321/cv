
// export default function Register() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
//           Register
//         </h2>
//         <form>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="confirm-password"
//               className="block text-sm font-semibold mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirm-password"
//               name="confirm-password"
//               className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Re-enter your password"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 focus:ring-4 focus:ring-blue-500"
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         {/* Footer Section */}
//         <p className="text-gray-400 text-center mt-6 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-400 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, FormEvent} from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("User registered successfully! Please Login");
    } else {
      setMessage(data.error || "Failed to register");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg"
            >
              Register
            </button>
          </div>
        </form>

        {/* Footer Section */}
        {message && (
          <p className="text-gray-400 text-center mt-6 text-sm">{message}</p>
        )}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
