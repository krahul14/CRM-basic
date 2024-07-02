import React from "react";
import { Command } from "lucide-react";



export default function CommandBar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white  text-black shadow-md z-50 w-1/3 max-w-3xl mt-4 rounded-md">
      <div className="flex items-center space-x-3 w-full">
        {/* <Command /> */}
        <input
          type="text"
          placeholder="Search Anything..."
          className="bg-gray-200 text-black p-2 rounded-md focus:outline-none flex-grow"
        />
      </div>
    </div>
  );
}
