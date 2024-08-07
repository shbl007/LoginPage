import { Eye, EyeOff } from "lucide-react";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col gap-3 ">
      <input
        type="text"
        className="focus:outline-none border border-1 rounded-l-full rounded-r-full p-2.5 px-6"
        placeholder="UserName"
      />
      <div className="relative">
        <input
          type="text"
          className="focus:outline-none border border-1 rounded-l-full rounded-r-full px-6 w-full p-2.5"
          placeholder="Password"
        />
        {/* <Eye className="absolute right-3 top-1.5" /> */}
        <EyeOff className="absolute right-3 top-2.5" />
      </div>
      <span className="self-end text-sm text-black-500 cursor-pointer inline-block">
        forget Password?
      </span>
      <button className="bg-black text-white rounded-l-full rounded-r-full p-2">
        Login
      </button>
      <div className="flex flex-row items-center font-semibold">
        <hr className="flex-grow" />
        <span className="px-4">or continue with</span>
        <hr className="flex-grow" />
      </div>
    </div>
  );
}

export default LoginForm;
