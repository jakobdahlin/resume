import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Lock, Github } from 'lucide-react';

const LoginCard: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border-2 border-white/20 
        rounded-xl shadow-xl shadow-black/30 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        
        <div className="flex items-center bg-white/10 rounded-full p-3 mb-4
          border-2 border-white/10 hover:border-white/20 transition duration-200">
          <User className="text-white mr-3" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none w-full text-white placeholder:text-white/50"
          />
        </div>

        <div className="flex items-center bg-white/10 rounded-full p-3
          border-2 border-white/10 hover:border-white/20 transition duration-200">
          <Lock className="text-white mr-3" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full text-white placeholder:text-white/50 
            transition-all focus-within:border-white"
          />
        </div>

        <div className="flex justify-between items-center text-md text-white mt-3 mb-4">
          <a href="#" className="underline text-white">Forgot password?</a>
        </div>

        <button className="w-full bg-white/30 text-white font-bold py-3 rounded-full 
          hover:bg-white/40 active:bg-neutral-100/50 transition duration-200 ">
          Login
        </button>

        <p className="text-center text-md text-white mt-3 mb-10">
          Don't have an account? <a href="#" className="font-bold underline">Register</a>
        </p>
      </div>

      {/* GITHUB LINK BELOW THE CARD */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jakobdahlin/resume/blob/main/components/buttondesign.tsx"
        className="mt-4 w-full max-w-md"
      >
        <motion.div
          className="flex items-center w-full justify-center gap-2 py-2 rounded-xl 
          bg-white/10 border
          border-white/20 hover:border-white transition ease-in-out z-800
          hover:shadow-lg hover:shadow-white/50 transform duration-300
          hover:bg-white/20 hover:text-white text-center cursor-pointer"
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex mx-auto gap-2 justify-center items-center">
            <Github size={18} />Code
          </div>
        </motion.div>
      </Link>
      </div>
    </div>
  );
};

export default LoginCard;
