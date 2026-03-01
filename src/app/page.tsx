"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaCode,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-hidden selection:bg-blue-500/30">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] transition-all duration-1000"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <FaLinkedin className="text-xl" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Auth<span className="text-blue-500">Node</span>
          </span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Security
          </a>
          <Link
            href="/login"
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              OAuth 2.0 Implementation
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                LinkedIn Auth
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
              Experience a seamless, manual OAuth 2.0 integration built with
              <span className="text-white font-semibold"> Next.js 14 </span>
              and <span className="text-white font-semibold"> Spring Boot</span>
              . No third-party libraries, just pure enterprise-grade security.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/login"
                className="group px-8 py-5 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3"
              >
                Launch Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-5 bg-slate-900 border border-slate-800 rounded-2xl font-bold text-lg hover:border-slate-700 transition-all flex items-center justify-center gap-3">
                View Source
                <FaCode className="text-slate-500" />
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <FaShieldAlt className="text-blue-500" />
                </div>
                <div className="text-sm font-semibold">Secure State</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <FaBolt className="text-cyan-500" />
                </div>
                <div className="text-sm font-semibold">Fast Sync</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <FaCode className="text-purple-500" />
                </div>
                <div className="text-sm font-semibold">Clean Code</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            {/* Visual Representation of the UI */}
            <div className="relative z-10 w-full aspect-square max-w-[500px] ml-auto">
              <div className="absolute top-0 right-0 w-full h-full bg-blue-500/5 rounded-[48px] border border-blue-500/10 rotate-3 transition-transform duration-700 hover:rotate-0"></div>
              <div className="absolute top-4 right-4 w-full h-full bg-slate-900 rounded-[40px] border border-slate-800 shadow-2xl p-8 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-slate-800 rounded-full"></div>
                    <div className="w-20 h-3 bg-slate-800/50 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-40 bg-slate-800/20 rounded-2xl border border-slate-800/50 p-4 space-y-4">
                    <div className="h-4 bg-slate-800 w-full rounded-full"></div>
                    <div className="h-4 bg-slate-800 w-[80%] rounded-full"></div>
                    <div className="h-4 bg-slate-800 w-[60%] rounded-full"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 h-14 bg-blue-600/20 rounded-xl border border-blue-500/30"></div>
                    <div className="w-14 h-14 bg-slate-800 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    </div>
  );
}
