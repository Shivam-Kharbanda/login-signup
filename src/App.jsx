import React, { useState } from "react";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Carousel from "./components/Carousel";

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => setIsSignUpMode((prev) => !prev);

  return (
    <main className={`flex justify-center items-center min-h-screen bg-orange-400 ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="relative max-w-4xl w-full h-[640px] bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className={`absolute inset-0 flex transition-transform duration-700 ${isSignUpMode ? "translate-x-1/2" : ""}`}>
          <div className="w-1/2">
            <SignInForm onToggle={toggleMode} />
          </div>
          <div className="w-1/2">
            <SignUpForm onToggle={toggleMode} />
          </div>
        </div>
        <Carousel isSignUpMode={isSignUpMode} />
      </div>
    </main>
  );
}

export default App;