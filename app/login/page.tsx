
// import {Navigation} from "@/app/components"
// // import { GlobalProvider } from "@/app/context/GlobalContext";

// export default function Login() {
//   return (
 
//          <div>
     
//      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
//      <Navigation.InteractiveNavBar />
//        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
//          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
//            Login
//          </h2>
//          <form>
//            {/* Email Field */}
//            <div className="mb-4">
//              <label htmlFor="email" className="block text-sm font-semibold mb-2">
//                Email
//              </label>
//              <input
//                type="email"
//                id="email"
//                name="email"
//                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                placeholder="Enter your email"
//                required
//              />
//            </div>
 
//            {/* Password Field */}
//            <div className="mb-4">
//              <label htmlFor="password" className="block text-sm font-semibold mb-2">
//                Password
//              </label>
//              <input
//                type="password"
//                id="password"
//                name="password"
//                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                placeholder="Enter your password"
//                required
//              />
//            </div>
 
//            {/* Submit Button */}
//            <div className="mt-6">
//              <button
//                type="submit"
//                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 focus:ring-4 focus:ring-blue-500"
//              >
//                Login
//              </button>
//            </div>
//          </form>
 
//          {/* Footer Section */}
//          <p className="text-gray-400 text-center mt-6 text-sm">
//            Don’t have an account?{" "}
//            <a href="/register" className="text-blue-400 hover:underline">
//              Register
//            </a>
//          </p>
//        </div>
//      </div>
 
 
//      </div>


 
 
    
//   );
// }
"use client"
import React, { useState , FormEvent} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();

    // Clear error
    setError('');

    try {
      // Send login request to the server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the dashboard or home page after successful login
        window.location.href = '/';
      } else {
        setError(data.message); // Show error message if login failed
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 focus:ring-4 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

