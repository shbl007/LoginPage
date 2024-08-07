import React from "react";
import { thirdPartyLogin } from "./Constant";

function FormIcon() {
  return (
    <div className="flex justify-center gap-2">
      {thirdPartyLogin.map((item) => (
        <img
          key={item.alt}
          width="30"
          height="30"
          className="bg-black rounded-full p-1"
          src={item.icon}
          alt={item.alt}
        />
      ))}
    </div>
  );
}

export default FormIcon;
