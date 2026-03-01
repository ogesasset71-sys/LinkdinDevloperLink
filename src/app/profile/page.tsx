"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaSignOutAlt,
  FaIdBadge,
} from "react-icons/fa";
import Image from "next/image";

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/login");
    }
  }, [user.isLoggedIn, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  if (!user.isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
        {/* Left Aspect - Visuals */}
        <div className="md:w-2/5 relative bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/profile_banner.png"
              alt="Background"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center text-white">
            <div className="relative mb-8 transform transition-transform hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl p-1 bg-white/20 backdrop-blur-sm">
                <Image
                  src={user.profilePicture || "https://via.placeholder.com/150"}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                <FaLinkedinIn className="text-white text-sm" />
              </div>
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-2 underline decoration-blue-500 decoration-4 underline-offset-8">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-blue-200/80 font-medium uppercase tracking-widest text-xs italic">
              Verified Professional
            </p>
          </div>
        </div>

        {/* Right Aspect - Details */}
        <div className="md:w-3/5 p-8 md:p-14 bg-white flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-slate-900 text-3xl font-extrabold tracking-tight">
                Profile Essence
              </h3>
              <div className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Account Active
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                  <FaEnvelope className="text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                    Primary Email
                  </p>
                  <p className="text-slate-900 font-semibold">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                  <FaIdBadge className="text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                    LinkedIn ID
                  </p>
                  <p className="text-slate-900 font-mono text-sm break-all font-semibold">
                    {user.linkedinId}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-slate-900 text-white font-bold py-4 px-6 rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
              Manage Connection
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-4 rounded-2xl border-2 border-slate-200 text-slate-500 font-bold hover:bg-slate-50 hover:text-red-500 hover:border-red-200 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
