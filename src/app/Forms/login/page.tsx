"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center p-4">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-ping"></div>
      </div>

      {/* Main form container */}
      <div className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-bounce-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4 animate-pulse"></div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-600 mt-2">Please Login to continue</p>
        </div>

        {/* Email input */}
        <div className="mb-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-6">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Login button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Ligin
        </button>

        {/* Forgot password */}
        <div className="text-center mt-4">
          <button className="text-orange-400 hover:text-orange-500 text-sm transition-colors">
            Forgot Password?
          </button>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button className="text-green-400 hover:text-green-500 font-semibold transition-colors">
              Sign Up
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}