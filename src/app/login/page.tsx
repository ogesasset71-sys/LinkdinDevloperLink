"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";

const CLIENT_ID = "860cj7r5jnu43g";
const REDIRECT_URI = "http://localhost:3000/auth/linkedin/callback";

export default function LoginPage() {
  const handleLogin = () => {
    // Generate a cryptographically random state for CSRF protection
    const state =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem("linkedin_oauth_state", state);

    const scope = "openid profile email";
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] p-6 font-sans">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl p-10 lg:p-12 transform transition-all duration-500 hover:shadow-blue-500/5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl mb-8 shadow-xl shadow-blue-500/40 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <FaLinkedin className="text-white text-5xl" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Login
          </h1>
          <p className="text-slate-400 font-medium text-lg leading-relaxed">
            Connect with LinkedIn to access your personalized dashboard.
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="group relative w-full flex items-center justify-center gap-4 bg-white text-blue-900 font-bold py-5 px-8 rounded-2xl shadow-xl hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="relative flex items-center gap-4">
            <FaLinkedin className="text-2xl text-blue-600" />
            <span className="text-lg">Sign in with LinkedIn</span>
          </div>
        </button>

        <div className="mt-12 flex items-center gap-5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
            OAuth 2.0 Secure
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm font-medium">
          By continuing, you agree to our{" "}
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer underline-offset-4 hover:underline transition-colors">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer underline-offset-4 hover:underline transition-colors">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
