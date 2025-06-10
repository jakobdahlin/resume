import React from 'react';
import { User, Lock, Github } from 'lucide-react';

const LoginCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-3xl">
      <div className="relative z-10 w-full max-w-md border-2 border-white/20 backdrop-blur-2xl
  rounded-3xl shadow-xl shadow-black/30 p-6 bg-white/10 sm:p-8">
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
    </div>
  );
};

export default LoginCard;
