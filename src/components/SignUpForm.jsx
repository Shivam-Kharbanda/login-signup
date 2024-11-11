import React from "react";
import logo from "../assets/logo.jpeg";

const SignUpForm = ({ onToggle }) => (
  <div className="p-8 flex flex-col justify-center h-full text-center">
    <div className="flex items-center justify-center mb-4">
      <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
      <h4 className="text-lg font-semibold">easyclass</h4>
    </div>
    <h2 className="text-2xl font-bold mb-2">Get Started</h2>
    <p className="text-gray-400">Already have an account? <span onClick={onToggle} className="text-blue-500 cursor-pointer">Sign in</span></p>
    <form className="space-y-6 mt-6">
      <input type="text" placeholder="Name" className="w-full border-b border-gray-300 focus:outline-none focus:border-black transition-all py-2" required />
      <input type="email" placeholder="Email" className="w-full border-b border-gray-300 focus:outline-none focus:border-black transition-all py-2" required />
      <input type="password" placeholder="Password" className="w-full border-b border-gray-300 focus:outline-none focus:border-black transition-all py-2" required />
      <button type="submit" className="w-full bg-black text-white py-3 rounded-lg">Sign Up</button>
      <p className="text-gray-500 text-sm">By signing up, I agree to the <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.</p>
    </form>
  </div>
);

export default SignUpForm