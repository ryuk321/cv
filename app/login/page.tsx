
import {Navigation} from "@/app/components"
// import { GlobalProvider } from "@/app/context/GlobalContext";

export default function Login() {
  return (
 
         <div>
     
     <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
     <Navigation.InteractiveNavBar />
       <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
         <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
           Login
         </h2>
         <form>
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
               required
             />
           </div>
 
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
           Don’t have an account?{" "}
           <a href="/register" className="text-blue-400 hover:underline">
             Register
           </a>
         </p>
       </div>
     </div>
 
 
     </div>


 
 
    
  );
}