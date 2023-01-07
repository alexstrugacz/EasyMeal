import React from "react";
import { useState } from "react";

const GetStartedButton: React.FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <div>
        <button className="bg-[#0ACF83] hover:bg-[#097f52] px-8 py-1.5 rounded-full text-white mx-auto drop-shadow-mg">
          Get started
        </button>
      </div>
    </div>
  );
};

export default GetStartedButton;
