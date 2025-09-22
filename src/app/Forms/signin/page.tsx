"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Sign up submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center p-4">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-bounce"></div>
      </div>

      {/* Main form container */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mx-auto mb-4 animate-pulse flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Join us today! It's quick and easy</p>
        </div>

        {/* Full Name input */}
        <div className="mb-5">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Full Name"
            />
          </div>
        </div>

        {/* Email input */}
        <div className="mb-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Phone input */}
        <div className="mb-5">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-5">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password input */}
        <div className="mb-6">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 hover:border-gray-300"
              placeholder="Confirm Password"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sign Up button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-xl font-semibold hover:from-green-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
        >
          Create Account
        </button>

        {/* Terms text */}
        <p className="text-xs text-gray-500 text-center mb-6">
          By signing up, you agree to our{' '}
          <span className="text-orange-400 hover:text-orange-500 cursor-pointer">Terms</span> and{' '}
          <span className="text-pink-400 hover:text-pink-500 cursor-pointer">Privacy Policy</span>
        </p>

        {/* Sign in link */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button className="text-green-400 hover:text-green-500 font-semibold transition-colors">
              Sign In
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}